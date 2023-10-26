<template>
    <div id="billing-main">
        <!-- Componente modal -->
        <Transition name="modal">
          <div class="overlay" v-if="modal">
            <PaymentModal @aceptAction="factureAcept" aceptText="Aceptar" ref="modalElement"> 
                <template v-slot:body>
                    <PaymentFields :fullTotal="totalTotal" ref="payFieldsComp"/>
                </template>
            </PaymentModal>
          </div>
        </Transition>


        <Transition name="freeze">
            <freezeInvoices class="freezeC" @show="showFreeze" @send="loadFreezeInvoice" v-if="freeze"/>
        </Transition>
    
        <!-- Otros componentes -->
        <div style="display: none;">
            <InvoiceElec ref="invoiceGenerator"/>
        </div>
        
        <div class="header"> 
            <h1 id="title">FACTURACIÓN</h1>
            <button @click="showFreeze" class="buttonFreeze">Congelados</button>
        </div>
    
        <div id="content">
            <ClientFields ref="clientComponent" @setClient="setClient" @setInvoiceType="setInvoiceType"/> 
            <ProductFields ref="productComponent" @addProduct="emitAddProduct"/> 
            <TableProducts :quant="itemsQuant" :labels="labels" id="billing-table">
                <template v-slot:body>
                    <TableBody ref="tableComp" @updateItems="setItems" :items="itemsList" :garbage="true"/>
                </template>
            </TableProducts>
            <DetailFields @save="saveLocalStorage" @facture ="loadModal" :quant="itemsQuant" :total="totalValue" :fullTotal="totalTotal"/>
        </div>
    </div>
</template>

<script setup>
    import { onClickOutside } from '@vueuse/core';
    import { ref, watch, onMounted } from 'vue';

    import ClientFields from '../components/billing-components/clientFields.vue';
    import ProductFields from '../components/billing-components/productFields.vue';
    import DetailFields from '../components/billing-components/detailsFields.vue';

    import PaymentModal from '../components/comun-components/modalTemplate.vue';
    import PaymentFields from '../components/billing-components/paymentFields.vue';

    import TableProducts from '../components/comun-components/tableTemplate.vue';
    import TableBody from '../components/billing-components/bodyTable.vue';

    import freezeInvoices from '../components/billing-components/freezeInvoices.vue';

    import { getProductFromApi } from '@/model/products.model.js';

    import InvoiceElec from '../components/billing-formats/elecInvoice.vue';

    import ErrorHandler from '@/store/errorHandler.js';
    const errorHandler = new ErrorHandler();

    //Etiquetas de la tabla
    const labels = ['Código', 'Imagen', 'Nombre', 'Unidad', 'Stock', 'Valor Unitario', 'Cantidad', 'Descuento', 'IVA', 'Valor total', 'Acciones'];

    //Interacción con estilos
    const modal = ref(false);
    const freeze = ref(false);

    //Interacción con factura --> Variables reactivas
    const itemsQuant = ref(0);
    const totalValue = ref(0);
    const totalTotal = ref(0);
    const iva = ref(0)
    const impuestos = ref(0);
    const dicount = ref(0);
    const itemsList = ref([]);

    //Interacción con factura --> Variables genéricas
    let client = null;
    let invoiceType = null;

    //Componentes
    const payFieldsComp = ref(null);
    const tableComp = ref(null);
    const clientComponent = ref(null);
    const productComponent = ref(null);

    const modalElement = ref(null);

    const invoiceGenerator = ref(null);
    
    /* Observa cambios en la lista para actualizar los datos relacionados */
    watch(itemsList.value, (newItems) => {
        let total = 0;
        let fullTotal = 0;
        let impuesto = 0;
        newItems.forEach((item) => {
            total += item.totalValue;
            impuesto = item.totalValue * (item.iva / 100)
            fullTotal += item.totalValue + impuesto;
        })
        totalTotal.value = fullTotal;
        totalValue.value = total;
        itemsQuant.value = itemsList.value.length;
    });

    onClickOutside(modalElement, () => {
        modal.value = false
    });

    /* Canal de comunicación entre componentes hijos */
    const emitAddProduct = ( product ) => {
        tableComp.value.addProduct( product );
    }

    //window.addEventListener('beforeunload', 
    //Observa cada vez que se recargue la página para guardar temporalmente el progreso
    const saveLocalStorage = () => {
        try {
            if(itemsList.value.length > 0){
                const currentItems = [];
                let replace = false;
                let temporalInvoices = JSON.parse(localStorage.getItem('temporalInvoices'));

                itemsList.value.forEach((item) => { //Añade la lista de productos
                    currentItems.push({
                        product: item.productCode,
                        quantity: item.quantity
                    })
                });

                if (temporalInvoices == null) {
                    temporalInvoices = []
                } else {
                    for (let i = 0; i < temporalInvoices.length; i++) {
                        if (temporalInvoices[i].clientId === client.idClient) {
                            temporalInvoices[i] = {
                                clientId: client.idClient,
                                clientDoc:  client.docNumber,
                                itemsList: currentItems,
                                date: new Date()
                            }
                            replace = true;
                            break;
                        }
                    }
                }

                if(!replace){
                    temporalInvoices.push({
                        clientId: client.idClient,
                        clientDoc:  client.docNumber,
                        itemsList: currentItems,
                        date: new Date()
                    });
                }
                
                localStorage.setItem('temporalInvoices', JSON.stringify(temporalInvoices));
            }
        } catch (error) {
            console.log(error)
        }
    };

    const loadFreezeInvoice = async (docNumber, items) =>{
        clientComponent.value.setClient(docNumber);

        console.log(items);

        items.forEach(async (item) => {
            console.log(item);
            let product = await getProductFromApi(item.product);
            product.quantity = item.quantity;
            emitAddProduct(product)
        })
    }

    /* Define las etiquetas para el body de la solicitud */
    const factureAcept = async () => {
        try {
            const invoiceInfo = {
                Clients_idClient: client.idClient,
                invoiceType: invoiceType,
                dicount: dicount.value,
                total:  totalValue.value,
                itemsQuant: itemsQuant.value,
                productList : itemsList.value,
                Users_idUser: payFieldsComp.value.getUserID(),
                typePay: payFieldsComp.value.getOptionPay()
            }
            
            const result = await payFieldsComp.value.sendInvoice(invoiceInfo);

            console.log(result);

            if(invoiceGenerator.value){
                invoiceGenerator.value.generatePDF(result.insertId);
            }

        } catch (error) {
            console.log(error);
        }
        
    } 

    //---------------------------------------- setters
    /* Define el id del cliente al cual se asociará la factura */
    const setClient = ( clientValue ) => {
        client = clientValue;
    }

    /* Define el tipo de factura que se generará */
    const setInvoiceType = ( invoiceOption ) => {
        invoiceType = invoiceOption;
        console.log("correcto " + invoiceType)
    }

    /* Define la lista de items que se renderiza */
    const setItems = ( allItems ) => {
        itemsList.value = allItems;
    }

    /* Carga la ventana modal desde componente hijo */
    const loadModal = async () => {
        try {
            if(!client) {
                await clientComponent.value.registerClient();
            }
            if(itemsList.value.length == 0) throw new Error('Ingrese productos para facturar');
            if(!invoiceType) throw new Error('Seleccione un tipo de factura válido')

            modal.value = true;
        } catch (error) {
            errorHandler.show(error);
        }
    }

    const showFreeze = () => {
        freeze.value = !freeze.value;
    }
</script>

<style scoped>

    #content { 
        position: relative;
        background-color: #FFFFFF;
        padding: 20px;
        border-radius: 15px;
        height: calc(100vh - 150px);
    }

    #billing-table {
        margin-top: 15px;
    }

    #billing-main {
        margin-top: -30px;
    }

    #title {
        font-family: Gilroy-Bold;
        font-size: 25px;
       
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
    }


    .buttonFreeze {
        height: 30px;
        width: auto;
        margin: auto 0;
        border-radius: 5px;
    }


    .freeze-enter-active,
    .freeze-leave-active {
        transition: transform 0.5s;
    }

    .freeze-enter-from, 
    .freeze-leave-to /* .modal-leave-active en <2.1.8 */ {
        transform: translateX(100%); /* Empieza desde la derecha */
    }
</style>