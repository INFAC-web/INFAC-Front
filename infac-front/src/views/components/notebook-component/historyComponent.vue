<template>
    <div class="history-container">
        <div class="header">
            <h2 class="subtitle">
                <span>HISTÓRICO</span>
            </h2>
        </div>
        <TableInvoices :labels="labels">
            <template v-slot:body>
                <TableBody>

                </TableBody>
            </template>
        </TableInvoices>

    </div>
</template>

<script setup>

    import TableInvoices from '../../components/comun-components/tableTemplate.vue';
    import TableBody from './history/bodyTableHistory.vue'

    const labels = ['', 'Categoría', 'Descripción', 'Monto', 'Fecha', 'Acciones'];

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
</style>