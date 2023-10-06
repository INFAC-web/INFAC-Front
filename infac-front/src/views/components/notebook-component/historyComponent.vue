<template>
    <div class="history-container">
        <div class="header">
            <h2 class="subtitle">
                <span>HISTÓRICO</span>
            </h2>
        </div>
        <table class="table">
            <thead>
                <th>Imagen</th> 
                <th>Categoria</th> 
                <th>Descripcion</th>
                <th>Monto</th>
                <th>Fecha</th>
            </thead>
            <tbody>
                <tr v-for="trans in transactions" :key="trans.id" class="row">
                    <td>{{ trans.img }}</td>
                    <td>{{ trans.category }}</td>
                    <td>{{ trans.description }}</td>
                    <td>{{ trans.amount }}</td>
                    <td>{{ trans.date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    const transactions = [
        {
            id: 1,
            category: "Cat1",
            description: "Una descripcion",
            amount: 5000,
            date: "04-10-2023"
        }
    ]
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