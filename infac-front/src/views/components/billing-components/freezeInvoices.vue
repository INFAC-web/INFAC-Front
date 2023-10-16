<template>
    <div id="freeze-container">
        <button class="close-button" @click="emit('show')"> × </button>
        <h3 class="title">Facturas Congeladas</h3>
        <div class="inputGroup">
            <input type="text" autocomplete="off" class="entry" required>
        </div>
        <div v-for="invoice in invoices" :key="invoice.id">
            <div>
                <span>Documento: </span>
                <span>{{ invoice.idClient }}</span>
            </div>
            <div>
                <span>Items: </span>
                <span>{{ invoices.length }}</span>
            </div>
            <div>
                <span>Fecha: </span>
                <span>{{ invoice.date }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const emit = defineEmits(['show']);
    const invoices = ref([]);

    const getInvoices = () => {
        invoices.value = JSON.parse(localStorage.getItem('temporalInvoices'));
    }

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
</style>