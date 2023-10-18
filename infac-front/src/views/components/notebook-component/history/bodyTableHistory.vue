<template>
    <tbody>
        <tr v-for="trans in transactions" :key="trans.id" class="row">
            <td>{{ trans.img }}</td>
            <td>{{ getCategory(trans.category) }}</td>
            <td>FACTURA {{ trans.invoiceNumber }}</td>
            <td>{{ trans.total }}</td>
            <td>{{ dateFormat(trans.date) }}</td>
            <td></td>
        </tr>
    </tbody>
</template>

<script setup>
    import { getInvoicesFromApi } from '@/model/invoices.model.js';
    import { ref } from 'vue';

    const transactions = ref(null);
   
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

    getInvoices();
</script>
