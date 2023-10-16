<template>
    <div id="main-container">
        <form id="client-form" >
                <div class="content">
                    <div class="inputGroup">
                        <input id="productCode" type="text" autocomplete="off" class="entry" :class="invalidIDClass" v-model="productCode" @keyup.enter="getProduct" required>
                        <label for="name" class="label">Código del producto</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry"  v-model="product.name" required>
                        <label for="name" class="label">Nombre del producto</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry centered" v-model="product.measure" required>
                        <label for="name" class="label">Medida</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry centered" v-model="product.unityPrice" required>
                        <label for="name" class="label">Precio</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry centered" v-model="quantity" required>
                        <label for="name" class="label">Cantidad</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry centered" v-model="product.iva" required>
                        <label for="name" class="label">IVA</label>
                    </div>
                    
                    <div id="buttons">
                        <button type="button" class="botonesTop" style="background-color: #0088AA;">
                            <img :src="`${iconPaths.billingIcons}/eye-icon.svg`">
                        </button>
                        <button @click="initProduct" type="button" class="botonesTop" style="background-color: #FF6262;">
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
    import ErrorHandler from '@/store/errorHandler.js';
    const errorHandler = new ErrorHandler();

    import { getProductFromApi } from '@/model/products.model.js'
    import { defineEmits, ref } from 'vue';
    const { iconPaths } = config;

    const emit = defineEmits(['addProduct']);
  
    //Entity Product
    const productModel = {
        idProduct: '',
        name: '',
        measure: '',
        retailSale: '',
        iva: '',
    }

    const product = ref(productModel);
    const productCode = ref(null);
    const quantity = ref('');

    const invalidIDClass = ref('');

    //Envía el producto al componente principal de facturación (billingPage)
    const getDataProduct = async () =>{
        try {
            await getProduct();
            product.value.quantity = parseInt(quantity.value);
            emit('addProduct', product.value);
            initProduct(); 
        } catch (error) {
        }   
    }

    //Obtiene un producto de la base de datos
    const getProduct = async () => {
        try {
            if(productCode.value){
                invalidIDClass.value = "";
                product.value = await getProductFromApi(productCode.value);

                if(quantity.value === ''){
                    quantity.value = 1;
                }
            } else {
                throw new Error("Ingrese un código válido");
            }
        } catch (error) {
            invalidIDClass.value = "warningEntry";
            errorHandler.show(error)
            throw error;
        }
    }

    const initProduct = () =>{
        product.value = productModel; //Reiniciar campos (Visual)
        quantity.value = '';
        productCode.value = null;
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

    .centered {
        text-align: center;
    }


</style>