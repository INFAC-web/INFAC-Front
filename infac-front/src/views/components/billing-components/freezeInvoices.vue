<template>
    <div id="freeze-container">
        <button class="close-button" @click="emit('show')"> × </button>
        <h3 class="title">Facturas Congeladas</h3>
        <div class="inputGroup">
            <input type="text" autocomplete="off" class="entry" v-model="searchTxt" required>
        </div>
        <div v-for="invoice in invoices" :key="invoice.id" class="record-container">
            <div @click="emit('send', invoice.clientDoc, invoice.itemsList)" class="record">
                <div>
                    <span class="subtitle">Documento: </span>
                    <span>{{ invoice.clientDoc }}</span>
                </div>
                <div>
                    <span class="subtitle">Items: </span>
                    <span>{{ invoice.itemsList.length }}</span>
                </div>
                <div>
                    <span class="subtitle">Fecha: </span>
                    <span>{{ invoice.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from "vue";

    const emit = defineEmits(['show', 'send']);
    const invoices = ref([]);
    const searchTxt = ref('');
   
    const getInvoices = () => {
        invoices.value = JSON.parse(localStorage.getItem('temporalInvoices'));
    }

    watch(searchTxt, (value) => {
        
    })

    getInvoices();
</script>
<style scoped>
    #freeze-container {
        width: 300px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1000;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.356), 0 0 0 -3px rgba(0, 0, 0, 0.04);
        background: rgb(255, 255, 255);
        padding: 30px 0px;
        text-align: center;
    }

    h3 {
        font-family: Gilroy-Medium;
    }

    .inputGroup {
        display: block;
        margin: 0 auto;
        width: 80%;
    }

    .close-button {
        font-family: Gilroy-Medium;
        font-size: 30px;
        color: #bdbbbb;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .close-button:hover {
        color: #000000;
    }

    .record-container {
        margin: 30px;
    }

    .record {
        font-family: Gilroy-Medium;
        font-size: 15px;
        display: block;
        margin: 0 auto;
        width: 100%;
        text-align: left;
        margin-top: 20px;
        cursor: pointer;
        border-bottom: 1px solid #D7D7D7; /* Define el ancho, estilo y color del borde inferior */
    }

    .record div {
        margin-bottom: 7px;
    }

    .subtitle {
        font-family: Gilroy-Bold;
    }

    .buttons button {
        width: 100%;
    }
</style>