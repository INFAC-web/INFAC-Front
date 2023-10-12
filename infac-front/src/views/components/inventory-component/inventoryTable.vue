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
        <TableInventory :labels="labels" :items="items" :disable="true" :edit="true" v-if="items"/>
    </div>
</template>

<script setup>
    import { defineEmits, ref } from 'vue';
    import { config } from '@/config.js';
    import { getProductsFromApi } from '@/model/products.model.js'

    import TableInventory from '../comun-components/tableTemplate.vue';
    
    const emits = defineEmits(['updateModal']);
    const { iconPaths } = config;

    const labels = ['Codigo', 'Imagen', 'Nombre', 'Categoria', 'Precio', 'Stock', 'Acciones']
    const items = ref();
   
    const getProducts = async () => {
        try {
            items.value = await getProductsFromApi();
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