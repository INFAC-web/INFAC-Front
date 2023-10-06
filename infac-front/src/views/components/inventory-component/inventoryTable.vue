<template>
    <div class="inventory-table">
        <div class="search-container">
            <input type="text" class="search-input">

            <select class="select-combo element" id="category" >
                <option value="">Categoría</option>
            </select>

            <select class="select-combo element" id="provider" >
            </select>

            <button @click="emits('updateModal')" class="button-add element">
                <img class="img-button" :src="`${iconPaths.tablesIcons}/add-icon.svg`" alt="">
                <span class="texto-button">Agregar</span>
            </button>
        </div>
        <table class="table">
            <thead>
                <th>Código</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id" class="row">
                    <td>{{ item.idProduct }}</td>
                    <td>{{ item.image }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.brand }}</td>
                    <td>{{ item.retailSale }}</td>
                    <td>{{ item.stock }}</td>

                    <td class="buttons-opts">
                        <button class="edit-button"> 
                            <img :src="`${iconPaths.tablesIcons}/edit-icon.svg`" alt="">
                        </button>
                        <button class="disable-button"> 
                            <img :src="`${iconPaths.tablesIcons}/disable-icon.svg`" alt="">
                        </button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { defineEmits, ref } from 'vue';
    import { config } from '@/config.js';

    import { getProductsFromApi } from '@/model/products.model.js'
    const { iconPaths } = config

    const emits = defineEmits(['updateModal']); // Define el evento personalizado

    const items = ref(null);

    const getProducts = async () => {
        try {
            const productList = await getProductsFromApi();
            items.value = productList.products;
        } catch (error) {
            console.log(error);
        }
    }

    getProducts();
</script>

<style scoped>
    /* ------------------- SEARCH CONTAINER */
    @import url('../../../assets/styles/tables.css');

    .search-container{ 
        height: 42px;
        margin-bottom: 25px;
    }

    .search-input, .button-input {
        height: 100%;
    }

    .button-add {
        font-family: Gilroy-Medium;
        align-items: center;
        color: white;
        width: 120px;
        height: 100%;
        border-radius: 10px;
        background: linear-gradient(99deg, #5217FA 0%, #D274FF 100%);
        border: none;
    }

    .button-add .img-button {
        height: 24px;
        margin-right: 10px;
    }

    .button-add > img, .button-add > span {
     vertical-align: middle;
    }
    
    .select-combo {
        font-family: Gilroy-Medium;
        height: 100%;
        width: 125px;
        border-radius: 10px;
        border: 1px solid #D7D7D7;
    }

    .search-input {
        width: 277px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #D7D7D7;
    }

    .element {
        margin-left: 13px;
    }

</style>