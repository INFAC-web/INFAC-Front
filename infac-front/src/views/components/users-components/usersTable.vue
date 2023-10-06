<template>
    <div class="inventory-table">
        <div class="search-container">
            <input type="text" class="search-input">

            <button @click="emits('updateModal')" class="button-add element">
                <img class="img-button" :src="`${iconPaths.tablesIcons}/add-icon.svg`" alt="">
                <span class="texto-button">Agregar</span>
            </button>
        </div>
        <table class="table">
            <thead>
                <th>Documento</th>
                <th>Usuario</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.uid" class="row">
                    <td>{{ user.doc }}</td>
                    <td>{{ user.userName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.email}}</td>

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
    const { iconPaths } = config;
    
    import { getProductsFromApi } from '@/model/products.model.js'

    const emits = defineEmits(['updateModal']); // Define el evento personalizado

    const users = ref(null);

    const getUsers= async () => {
        try {
            const productList = await getProductsFromApi();
            items.value = productList.products;
        } catch (error) {
            console.log(error);
        }
    }

    getUsers();
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