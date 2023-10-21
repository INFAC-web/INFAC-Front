<template>
    <div >
        <div class="search-container">
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" required>
                <label for="name" class="label">Código</label>
            </div>

            <button @click="emits('showModal', true)" class="button-add element">
                <img class="img-button" :src="`${iconPaths.tablesIcons}/add-icon.svg`" alt="">
                <span class="texto-button">Agregar</span>
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { config } from '@/config.js';
    
    const emits = defineEmits(['showModal']);
    const { iconPaths } = config;

</script>

<style scoped>
    /* ------------------- SEARCH CONTAINER */
    .search-container{ 
        display: flex;
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