<template>
    <div id="main-container">
        <form id="client-form" >
                <div class="content">
                    <input class="input" type="text" placeholder="Código del producto" v-model="productCode" @keyup.enter="getProduct">
                    <input class="input" id="product-name" type="text" placeholder="Nombre del producto" v-model="product.name">
                    <input class="input" type="text" placeholder="U.Medida" v-model="product.measure">
                    <input class="input" type="text" placeholder="Precio Unitario" v-model="product.retailSale">
                    <input class="input" type="text" placeholder="Cantidad" v-model="quantity">
                    <input class="input" type="text" placeholder="IVA" v-model="product.iva">
                    
                    <div id="buttons">
                        <button type="button" class="botonesTop" style="background-color: #0088AA;">
                            <img :src="`${iconPaths.billingIcons}/eye-icon.svg`">
                        </button>
                        <button type="button" class="botonesTop" style="background-color: #FF6262;">
                            <img :src="`${iconPaths.billingIcons}/garbage-icon.svg`"></button>
                        <button @click="getDataProduct" type="button" class="botonesTop" style="background-color: #378039;">
                            <img :src="`${iconPaths.billingIcons}/plus-icon.svg`" style=" width: 15px; vertical-align: middle;">
                        </button>  
                    </div>  
                </div>
        </form>
    </div>
</template>

<script setup>
    import { config } from '@/config.js';

    import { getProductFromApi } from '@/model/products.model.js'
    import { defineEmits, ref } from 'vue';
    const { iconPaths } = config;

    const quantity = ref('');

    const productModel = {
        idProduct: '',
        name: '',
        measure: '',
        retailSale: '',
        iva: '',
    }

    const product = ref(productModel);

    const nameProduct = ref('');
    const productCode = ref('');

    const emit = defineEmits(['addProduct']); // Define el evento personalizado

    const getDataProduct = async () =>{
        await getProduct();

        product.value.quantity = parseInt(quantity.value);

        emit('addProduct', product.value);

        product.value = productModel;
        quantity.value = '';
        productCode.value = '';
    }

    const getProduct = async () => {
        product.value = await getProductFromApi(productCode.value);

        if(quantity.value === ''){
            quantity.value = 1;
        }
    }

</script>
<style scoped>

    @import url('../../../assets/styles/global.css');

    .content {
        margin-top: 15px
    }

    #buttons {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
    }

    .botonesTop {
        margin: 0;
        padding: 0;
        height: 30px;
        width: 30px;
        border: none;
        border-radius: 15px;
        align-items: center;
        display: flex;
        justify-content: center; /* Para centrar el contenido horizontalmente */
    }


    #client-form .content {
        display: grid;
        grid-template-columns: 20% 30% 8% 10% 9% 5% auto; /* Define los tamaños de las columnas aquí */
        gap: 2%;
        align-items: center;
        width: 80%;
    }


</style>