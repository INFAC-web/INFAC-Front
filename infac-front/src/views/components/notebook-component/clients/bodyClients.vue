<template>
    <tbody>
        <tr v-for="client in clients" :key="client.id" class="row">
            <td>{{ client.docNumber }}</td>
            <td>{{ client.name }}</td>
            <td>{{ client.lastName }}</td>
            <td>{{ client.phoneNumber }}</td>
            <td class="buttons-opts">
                <button class="disable-button"> 
                    <img src="@/assets/icons/tables-icons/disable-icon.svg" alt="10px">
                </button>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
    import { getAllClients } from '@/model/clients.model.js';
    import { ref } from 'vue';

    const clientEntity = {
        idClient: '',
        docNumber: '',
        name: '',
        lastName: '',
        phoneNumber: '',
    }

    const clients = ref(null)
    const client = ref(null);

    const getClients = async () => {
        try {
            clients.value = await getAllClients();
        } catch (error) {
            console.log(error);
        }
    }

    const getClient = async ( idClient ) => {

    }
    
    getClients();
</script>

<style scoped>
    tr {
        height: 70px;
    }
</style>
