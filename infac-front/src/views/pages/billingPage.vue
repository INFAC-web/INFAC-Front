<template>
    <div id="billing-main">
        <h1 id="title">FACTURACIÓN</h1>
        <div id="content">
            <clientFields/> <!-- Campos para la información del cliente -->

            <productFields @addProduct="addProduct"/> <!-- Campos para la información simplificada del producto -->
            
            <BillingTable @modifyQuant="modifyItems" :labels="labels" :items="itemsList" :garbage="true" id="billing-table"/> <!-- Tabla para el registro de pedido -->

            <DetailFields :quant="itemsQuant" :total="totalValue"/> <!-- Campos para la información actual de la factura -->
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import clientFields from '../components/billing-components/clientFields.vue';
    import productFields from '../components/billing-components/productFields.vue';
    import BillingTable from '../components/billing-components/productsTable.vue';
    import DetailFields from '../components/billing-components/detailsFields.vue';

    const itemsList = ref([]);
    const itemsQuant = ref(itemsList.value.length);
    const totalValue = ref(0);

    const labels = ['Código', 'Imagen', 'Nombre', 'Unidad', 'Stock', 'Valor Unitario', 'Cantidad', 'Descuento', 'IVA', 'Valor total', 'Acciones']
               
    const addProduct = ( product ) => {  
        if (!validateProduct( product )) {
            product.totalValue = product.quantity * product.retailSale;
            itemsList.value.push( product );
            itemsQuant.value = itemsList.value.length;
        } 
    }

    const validateProduct = ( product ) =>{
        const itemInList = itemsList.value.find(item => item.idProduct === product.idProduct);

        if(itemInList){
            itemInList.quantity += product.quantity;
            itemInList.totalValue = itemInList.quantity * itemInList.retailSale;
            return true;
        }
        return false;
    }

    watch(itemsList.value, (newItems) => {
        let total = 0;
        newItems.forEach((item) => {
            total += item.totalValue;
        })

        totalValue.value = total;

        console.log("Lista de productos actualizada:", newItems);
        console.log("Valor total:", totalValue.value);
    });

    const modifyItems = ( idProduct, newQuant ) => {

        if( newQuant == 0 ) {
            for (let i = 0; i < itemsList.value.length; i++) {
                if (itemsList.value[i].idProduct === idProduct) {
                    itemsList.value.splice(i, 1);
                    break;
                }
            }
        }

        const itemInList = itemsList.value.find(item => item.idProduct === idProduct);

        itemInList.quantity = newQuant;

        itemInList.totalValue = itemInList.quantity * itemInList.retailSale;

        console.log("Saliendo de input " + idProduct + " " + newQuant); 
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