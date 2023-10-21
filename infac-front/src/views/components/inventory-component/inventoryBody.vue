<template>
    <tbody>
        <tr v-for="item in items" :key="item.id" class="row">
            <td>{{ item.code }}</td>
            <td>{{ item.image }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.retail }}</td>
            <td>{{ item.stock }}</td>
        
            <td class="buttons-opts">
                <button @click="deleteItem(item.idProduct)" class="disable-button">
                    <img :src="`${iconPaths.tablesIcons}/disable-icon.svg`" alt="">
                </button>
                <button @click="getProduct(item.idProduct)"  class="edit-button">
                    <img :src="`${iconPaths.tablesIcons}/edit-icon.svg`" alt="">
                </button>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
    import { ref } from 'vue';
    import { getProductsFromApi, getFullProduct } from '@/model/products.model.js'

    import ErrorHandler from '@/store/errorHandler.js';
    const errorHandler = new ErrorHandler();

    import { config } from '@/config.js';
    const { iconPaths } = config;

    const props = defineProps(['items']);
    const emit = defineEmits(['loadProduct']);
    const items = ref(props.items);

    const getProducs = async () =>{
        try {
            items.value = await getProductsFromApi();
        } catch (error) {
            errorHandler.show(error)   
        }
    }

    const getProduct = async (idProduct) =>{
        try {
            const product = await getFullProduct(idProduct);
            console.log(product)
            emit('loadProduct', product);
        } catch (error) {
            errorHandler.show(error)   
        }
    }

    getProducs();

</script>

<style scoped>
    tr {
        height: 70px;
    }
</style>