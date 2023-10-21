<template>
    <div class="history-container">
        <div class="header">
            <h2 class="subtitle">
                <span>CLIENTES</span>
            </h2>
        </div>
        <TableClients :labels="labels">
            <template v-slot:body>
                <BodyClients></BodyClients>
            </template>
        </TableClients>
    </div>
</template>

<script setup>
    import TableClients from '../../components/comun-components/tableTemplate.vue';
    import BodyClients from './clients/bodyClients.vue'

    const labels = ['Documento', 'Nombre', 'Apellidos', 'Contacto', 'Acciones'];
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