<template>
    <tbody>
        <tr v-for="item in items" :key="item.id" class="row">
            <td>{{ item.productCode }}</td>
            <td>{{ item.image }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.measure }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.unityPrice }}</td>
            <td>
                <input type="text" v-model="item.quantity" @blur="modifyItems(item.Products_idProduct, item.quantity)" id="quantity">
            </td>
            <td>{{ item.discount }}</td>
            <td>{{ item.iva }}</td>
            <td>{{ item.totalValue }}</td>

            <td class="buttons-opts">
                <button @click="deleteItem(item.idProduct)" class="disable-button">
                    <img :src="`${iconPaths.tablesIcons}/garbage-icon.svg`" alt="">
                </button>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
    import { config } from '@/config.js';
    import { ref } from 'vue';
    import ErrorHandler from '@/store/errorHandler.js';
    const errorHandler = new ErrorHandler();

    const { iconPaths } = config;
    const props = defineProps(['items'])
    const emit = defineEmits(['updateItems']);
   
    const items = ref(props.items);

    /* Modifica la lista de productos */
    const addProduct = ( product ) =>{
        try {
            if(product.quantity == 0) throw new Error ('Ingrese una cantidad válida')
            const itemInList = items.value.find(item => item.Products_idProduct === product.Products_idProduct);

            if(itemInList){ 
                itemInList.quantity += product.quantity;
                itemInList.totalValue = itemInList.quantity * itemInList.unityPrice;
            } else {
                product.totalValue = product.quantity * product.unityPrice;
                items.value.push( product );
                emit('updateItems', items.value);
            }
        } catch (error) {
            errorHandler.show(error);
        }
    }

    /* Modifica el total de productos desde el input de cantidad */
    const modifyItems = ( idProduct, newQuant ) => {
        try {
            if( newQuant == 0 ) {
                deleteItem(idProduct);
                return;
            }

            const itemInList = items.value.find(item => item.Products_idProduct === idProduct);

            if(newQuant > itemInList.stock) {
                throw new Error('Ingrese una cantidad válida')
            } 
            
            itemInList.quantity = parseInt(newQuant);
            itemInList.totalValue = itemInList.quantity * itemInList.unityPrice;
            emit('updateItems', items.value);
        
            console.log(items.value);

        } catch (error) {
            errorHandler.show(error);
        }
        
    }

    /* Elimina un item de la lista de productos */
    const deleteItem = ( idProduct ) => {
        for (let i = 0; i < items.value.length; i++) {
            if (items.value[i].Products_idProduct === idProduct) {
                items.value.splice(i, 1);
                emit('updateItems', items.value);
                break;
            }
        }
    }

    defineExpose({
        addProduct
    });
</script>

<style scoped>
    @import url('../../../assets/styles/tables.css');
    
    .withLine {
        border-bottom: 1px solid black;
    }

    #quantity {
        font-family: Gilroy-Medium;
        size: 15px;
        border: none;
        outline: none;
        text-align: center; 
        vertical-align: middle;
        width: 50%;
        height: 100%;
    }

    tbody {
        display: block;
        max-height: 300px;
        overflow: auto;
        width: 100%;
    }

</style>