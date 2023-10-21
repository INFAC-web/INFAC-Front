<template>
    <div class="history-container">
        <div class="header">
            <h2 class="subtitle">
                <span>HISTÓRICO</span>
            </h2>
            <div class="viewOptions">
                <select  class="select" name="Tipo-persona">      
                        <option value="">Este mes</option>
                        <option value="natural">Esta semana</option>
                        <option value="juridica">Hoy</option>
                </select>
                <div class="inputGroup">
                        <input type="number" autocomplete="off" class="entry" required>
                        <label for="name" class="label">Código</label>
                </div>
            </div>
        </div>
        <TableInvoices :labels="labels">
            <template v-slot:body>
                <TableBody @generateInvoice="generateInvoice"/>
            </template>
        </TableInvoices>
        <!-- Otros componentes -->
        <div style="display: none;">
            <Facture ref="invoiceGenerator"/>
        </div>
    </div>
</template>

<script setup>

    import TableInvoices from '../../components/comun-components/tableTemplate.vue';
    import TableBody from './history/bodyTableHistory.vue';
    import Facture from '../billing-formats/elecInvoice.vue'
    import { ref } from 'vue';

    const labels = ['', 'Categoría', 'Descripción', 'Monto', 'Fecha', 'Acciones'];

    const invoiceGenerator = ref(null);

    const generateInvoice = (idInvoice) => {
        invoiceGenerator.value.generatePDF(idInvoice);
    }

</script>

<style scoped>
    @import url('../../../assets/styles/tables.css');
    
    .subtitle {
        font-family: Gilroy-Bold;
        font-size: 20px;
    }

    .table {
        height: calc(100vh - 50px);
    }
    
    .history-container {
        background-color: #FFFFFF; 
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .viewOptions {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        gap: 20px;
        margin: auto 0;
    }
</style>