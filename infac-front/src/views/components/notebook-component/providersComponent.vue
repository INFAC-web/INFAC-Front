<template>
    <div class="history-container">
        <!-- Componentes modal -->
        <Transition name="modal">
            <div class="overlay" v-if="modal">
                <ModalTemplate @aceptAction="sendProvider" aceptText="Aceptar" ref="modalElement">
                    <template v-slot:body>
                        <ProviderModal :provider="currentProvider"/>
                    </template>
                </ModalTemplate>
            </div>
        </Transition>

        <div class="header">
            <h2 class="subtitle">
                <span>PROVEEDORES</span>
            </h2>
            <ViewOptions class="viewOptions" @showModal="showModal"/>
        </div>
        
        <TableProviders :labels="labels">
            <template v-slot:body>
                <BodyTable @setProviders="setProviders" @setCurrentProvider="setCurrentProvider" @showModal="showModal">
                </BodyTable>
            </template>
        </TableProviders>
    </div>
</template>

<script setup>
    import { ref } from "vue"
    import { onClickOutside } from '@vueuse/core';

    import { getProvidersFromApi } from '@/model/providers.model.js'

    import TableProviders from '../../components/comun-components/tableTemplate.vue';
    import BodyTable from './providers/bodyTableProv.vue'
    import ViewOptions from './providers/viewOptions.vue';
    import ModalTemplate from '../../components/comun-components/modalTemplate.vue'
    import ProviderModal from './providers/providerModal.vue'

    const modal = ref(false);
    const modalElement = ref(null);

    const providers = ref(null);
    const currentProvider = ref('');

    const labels = ['NIT', 'Empresa', 'Representante', 'Contacto', 'Acciones'];

    onClickOutside(modalElement, () => {
        modal.value = false
    });

    const getProviders = async () => {
        providers.value = await getProvidersFromApi();
        console.log(providers.value)
    }

    getProviders();

    //TODO --> ruta para registrar un nuevo proveedor
    const sendProvider = async () => {
    }


    //------------------------------------ Setters
    const setProviders = (allProviders) => {
        providers.value = allProviders;
    }

    const setCurrentProvider = (provider) => {
        currentProvider.value = provider;
    }

    const showModal = (value) => {
        modal.value = value;
        if(!value) currentProvider.value = '';
    }
</script>

<style scoped>

    .header {
            display: flex;
            justify-content: space-between;
    }

    .viewOptions {
    }
  
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