<template>
    <div class="modal-inputs">
        <div class="modal-container">
            <h2 class="modal-title">AGREGAR PRODUCTO</h2>
            <div>
                <div class="first-line">
                    <button class="img-load">
                        <img :src="`${iconPaths.modalIcons}/cloud-icon.svg`" alt="">
                    </button> 
                    <div class="inputs-first">
                        <div class="container">
                            <div class="inputGroup">
                                <input type="text" :class="{ 'warningEntry': continueNext && !product.productCode}" autocomplete="off" class="entry" v-model="product.productCode" @blur="getProduct" required>
                                <label for="name" class="label">Id del producto</label>
                            </div>
                            <div class="inputGroup">
                                <input type="text" autocomplete="off" class="entry"  :class="{ 'warningEntry': continueNext && !product.name}" v-model="product.name" required>
                                <label for="name" class="label">Nombre del producto</label>
                            </div>
                        </div>
                        <div>
                            <div class="inputGroup description">
                                <input type="text" autocomplete="off" class="entry" v-model="product.description" required>
                                <label for="name" class="label">Descripción del producto</label>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="second-line">
                    <select class="select" v-model="product.Providers_idProvider" >
                        <option value=1>Proveedor</option>
                    </select>
                    <select class="select" v-model="product.Categories_idCategory">
                        <option value=1>Categoria</option>
                    </select>
                    <select class="select" id="provider" v-model="product.measure">
                        <option value='UND'>Unidad</option>
                    </select>
                </div>
                <div class="third-line">
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry"  :class="{ 'warningEntry': continueNext && !product.costPrice}" v-model="product.costPrice" required>
                        <label for="name" class="label">Costo</label>
                    </div>
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry" :class="{ 'warningEntry': continueNext && !product.retailSale}" v-model="product.retailSale" required>
                        <label for="name" class="label">Venta al detal</label>
                    </div>
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry" :class="{ 'warningEntry': continueNext && !product.wholeSale}" v-model="product.wholeSale" required>
                        <label for="name" class="label">Venta al mayor</label>
                    </div>
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry" :class="{ 'warningEntry': continueNext && !product.minStock}" v-model="product.minStock" required>
                        <label for="name" class="label">Stock Mínimo</label>
                    </div>
                </div>
                <div class="fourth-line">
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry"  :class="{ 'warningEntry': continueNext && !product.wholeQuantity}" v-model="product.wholeQuantity" required>
                        <label for="name" class="label">Cantidad Mayor*</label>
                    </div>
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry" :class="{ 'warningEntry': continueNext && !product.stock}" v-model="product.stock" required>
                        <label for="name" class="label">Stock actual</label>
                    </div>
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry" :class="{ 'warningEntry': continueNext && !product.iva}" v-model="product.iva" required>
                        <label for="name" class="label">IVA</label>
                    </div>
                    <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry" v-model="product.bonus" required>
                        <label for="name" class="label">Bonificación</label>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { registerProduct, getFullProduct, getProductByCode} from '@/model/products.model.js'

    import ErrorHandler from '@/store/errorHandler.js';
    const errorHandler = new ErrorHandler();

    import { config } from '@/config.js';
    import { onMounted, ref } from 'vue';
    const { iconPaths } = config;

    const emit = defineEmits(['send'])
    const props = defineProps(['product']);
    
    const product = ref(props.product);
    const continueNext = ref(false);

    onMounted(() => {
        console.log("Producto")
        console.log(product)
    })
    
    const addProduct = async () => {
        try{
            continueNext.value = !validation(product.value);
            if(continueNext.value) throw new Error('Complete los campos')
            const response = await registerProduct(product.value);
            product.value = props.product;
            errorHandler.show(response);
        } catch (error) {
            errorHandler.show(error);  
        }
    }

    const getProduct = async () => {
        try {
            const response = await getProductByCode(product.value.productCode);
            product.value = response;

        } catch (error) {
            console.log("ERROR")
            console.log(error)
            errorHandler.show(error)
        }
    }

    const setProduct = ( theProduct ) => {
        product.value = theProduct;
    }

    const validation = (product) => {
        const atributosAValidar = [ 'productCode', 'name', 'costPrice', 'retailSale', 'wholeSale',
            'minStock','wholeQuantity', 'iva', 'measure', 'stock'
        ];

        for (const atributo of atributosAValidar) {
            if (product[atributo] === null || product[atributo] === '') {
                return false;
            }
        }
        return true
    }

   
    defineExpose({
        addProduct,
        setProduct
    });
</script>

<style scoped>

    h2 {
        font-family: Gilroy-Bold    ;
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
    }

    .img-load {
        background: none;
        border: 2px solid #D7D7D7;
        border-radius: 10px;

    }
    .first-line, .second-line, .third-line, .fourth-line{
        margin-top: 15px;
        display: grid;
        gap: 15px;
    }

    .container{
        display: grid;
        grid-template-columns: 0.6fr 1fr ;
        gap: 15px;
    }

    .inputs-first{
        display: grid;
        grid-template-rows: 1fr 2fr;
        gap: 15px;
    }

    .description {
        height: 100%;
       
    }

    .description input {
        height: 100%;
    }

    .first-line {
        grid-template-columns: 0.4fr 1fr ; /* Primera columna tamaño automático, segunda columna se expande */
    }

    .second-line{
        grid-template-columns: 1fr 1fr 1fr ; /* Primera columna tamaño automático, segunda columna se expande */
    }
    .third-line {
        grid-template-columns: 1fr 1fr 1fr 1fr; /* Primera columna tamaño automático, segunda columna se expande */
    }

    .fourth-line {
        grid-template-columns: 1.2fr 1.25fr 0.5fr 1fr; /* Primera columna tamaño automático, segunda columna se expande */
    }

    .modal-inputs {
        width: 550px;
        padding: 20px;
    }

</style>
