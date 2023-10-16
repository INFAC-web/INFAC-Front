<template>
    <div id="billing-main">
        <!-- Componente modal -->
        <Transition v-bind="modal" v-if="modal" class="modal">
            <PaymentModal @aceptAction="factureAcept" aceptText="Aceptar"> 
                <template v-slot:body>
                    <PaymentFields ref="payFieldsComp"/>
                </template>
            </PaymentModal>
        </Transition>
        <Transition v-bind="freeze" v-if="freeze">
            <freezeInvoices class="freezeC" @show="showFreeze"/>
        </Transition>
        
        <Transition class="fade">   
            <div v-bind="modal" v-if="modal" @click.prevent="modal=false" class="overlay"></div>
        </Transition>

        <!-- Otros componentes -->
        <h1 id="title">FACTURACIÓN</h1>
        <button @click="showFreeze">Congelados</button>
        <div id="content">
            <ClientFields @setClient="setClient" @setInvoiceType="setInvoiceType"/> 
            <ProductFields @addProduct="emitAddProduct"/> 
            <TableProducts :quant="itemsQuant" :labels="labels" id="billing-table">
                <template v-slot:body>
                    <TableBody ref="tableComp" @updateItems="setItems" :items="itemsList" :garbage="true"/>
                </template>
            </TableProducts>
            <DetailFields @save="saveLocalStorage" @facture ="loadModal" :quant="itemsQuant" :total="totalValue"/>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import ClientFields from '../components/billing-components/clientFields.vue';
    import ProductFields from '../components/billing-components/productFields.vue';
    import DetailFields from '../components/billing-components/detailsFields.vue';

    import PaymentModal from '../components/comun-components/modalTemplate.vue';
    import PaymentFields from '../components/billing-components/paymentFields.vue';

    import TableProducts from '../components/comun-components/tableTemplate.vue';
    import TableBody from '../components/billing-components/bodyTable.vue';

    import freezeInvoices from '../components/billing-components/freezeInvoices.vue';

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
    const dicount = ref(0);
    const itemsList = ref([]);

    //Interacción con factura --> Variables genéricas
    let client = null;
    let invoiceType = null;

    //Componentes
    const payFieldsComp = ref(null);
    const tableComp = ref(null);
    
    /* Observa cambios en la lista para actualizar los datos relacionados */
    watch(itemsList.value, (newItems) => {
        let total = 0;
        newItems.forEach((item) => {
            total += item.totalValue;
        })
        totalValue.value = total;
        itemsQuant.value = itemsList.value.length;
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
                        Products_idProduct: item.idProduct,
                        quantity: item.quantity
                    })
                });

                if (temporalInvoices == null) {
                    temporalInvoices = []
                } else {
                    for (let i = 0; i < temporalInvoices.length; i++) {
                        if (temporalInvoices[i].client === client.idClient) {
                            temporalInvoices[i] = {
                                clientId: client.idClient,
                                clientDoc:  client.docNumber,
                                itemsList: currentItems
                                date:
                            }
                            replace = true;
                            break;
                        }
                    }
                }

                if(!replace){
                    temporalInvoices.push({
                        client: client.idClient,
                        itemsList: currentItems
                    });
                }
                
                localStorage.setItem('temporalInvoices', JSON.stringify(temporalInvoices));
            }
        } catch (error) {
            console.log(error)
        }
    };

    /* Define las etiquetas para el body de la solicitud */
    const factureAcept = async () => {
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
        await payFieldsComp.value.sendInvoice(invoiceInfo);
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
    const loadModal = () => {
        try {
            if(!client) throw new Error('Seleccione un cliente válido')
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
</style>