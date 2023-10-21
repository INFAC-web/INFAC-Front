<template>
    <tbody>
        <tr v-for="provider in providers" :key="provider.id" class="row">
            <td>{{ provider.nitCompany }}</td>
            <td>{{ provider.companyName }}</td>
                <td>{{ provider.providerName }}</td>
                <td>{{ provider.phoneNumber }}</td>
                <td class="buttons-opts">
                    <button @click="getProvider(provider.idProvider)" class="edit-button"> 
                        <img src="@/assets/images/tables-icons/edit-icon.svg" alt="">
                    </button>
                    <button class="disable-button"> 
                        <img src="@/assets/images/tables-icons/disable-icon.svg" alt="">
                    </button>
                </td>
            </tr>
            </tbody>
</template>

<script setup>
    import { ref } from "vue"
    import { getProvidersFromApi, getProviderFromApi } from '@/model/providers.model.js'

    const emit = defineEmits(['setProviders', 'setCurrentProvider', 'showModal']);

    const providers = ref(null);

    const getProviders = async () => {
        providers.value = await getProvidersFromApi();
        emit('setProviders', providers.value)
    }

    const getProvider = async (id) => {
        const provider = await getProviderFromApi(id);
        emit('showModal', true);
        emit('setCurrentProvider', provider);
        
        setTimeout(() => {
            
        }, 100)
    }

    getProviders();
</script>

<style scoped>
    tr {
        height: 70px;
    }
</style>