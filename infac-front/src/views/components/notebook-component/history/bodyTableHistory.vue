<template>
    <tbody>
        <tr v-for="trans in transactions" :key="trans.id" class="row">
            <td>{{ trans.img }}</td>
            <td>{{ getCategory(trans.category) }}</td>
            <td>FACTURA {{ trans.invoiceNumber }}</td>
            <td>{{ trans.total }}</td>
            <td>{{ dateFormat(trans.date) }}</td>
            <td><button class="generator" @click="getInvoice(trans.idInvoice)">
                <img src="@/assets/icons/billing-icons/print-icon.svg">
            </button></td>
        </tr>
    </tbody>
</template>

<script setup>
    import { getInvoicesFromApi, getInvoiceFromApi } from '@/model/invoices.model.js';
    import { ref } from 'vue';

    const emit = defineEmits(['generateInvoice'])
    const transactions = ref(null);
    const invoiceAdmin = ref(null);
   
    const getInvoices = async () => {
        transactions.value = await getInvoicesFromApi();
        console.log(transactions.value)
    }

    const dateFormat = (date) =>{
        const dbDate = new Date(date);
        return (dbDate.getMonth() + 1) + '-' + dbDate.getDate() + '-' + dbDate.getFullYear()
    }

    const getCategory = (category) => {
        const ingreso = ['NOTADEBITO', 'NOTACREDITO', 'COMPRA']

        if(ingreso.includes(category)){
            return 'ENTRADA'
        } else {
            return 'SALIDA'
        }
    }

    const getInvoice = async ( idInvoice ) => {
        emit('generateInvoice', idInvoice)
    }

    getInvoices();
</script>

<style scoped>
    tr {
        height: 70px;
    }

    img {
        width: 20px;
    }

    .generator {
        background: blue;
        border: none;
        padding: 5px 15px;
        border-radius: 7px;

    }
</style>