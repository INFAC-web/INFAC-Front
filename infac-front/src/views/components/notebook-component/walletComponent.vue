<template>
    <div class="history-container">
        <div class="header">
            <h2 class="subtitle">
                <span>Cartera</span>
            </h2>
        </div>
        <table class="table">
            <thead>
                <th>Documento</th> 
                <th>Nombre</th> 
                <th>Apellidos</th>
                <th>Contacto</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                    <tr v-for="provider in providers" :key="provider.id" class="row">
                        <td>{{ provider.nit }}</td>
                        <td>{{ provider.bussines }}</td>
                        <td>{{ provider.name }}</td>
                        <td>{{ provider.email }}</td>
                        <td class="buttons-opts">
                            <button class="edit-button"> 
                                <img src="@/assets/images/tables-icons/edit-icon.svg" alt="">
                            </button>
                            <button class="disable-button"> 
                                <img src="@/assets/images/tables-icons/disable-icon.svg" alt="">
                            </button>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    const providers = [
        {
            nit: 1,
            bussines: "Empresa1",
            name: "Pepito pito",
            email: 5000,
        }
    ]
</script>

<style scoped>
    .subtitle {
        font-family: Gilroy-Medium;
    }
    .table {
        height: calc(100vh - 50px);
    }
    .history-container {
        background-color: #FFFFFF;
    }
</style>