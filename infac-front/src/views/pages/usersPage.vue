<template>
    <div class="super-main">
        <div class="main-inventory">
            <!-- Componentes modal -->
            <Transition name="modal">
            <div class="overlay" v-if="modal">
                <ModalTemplate @aceptAction="sendUser" aceptText="Aceptar" ref="modalElement">
                    <template v-slot:body>
                        <AddUserForm ref="userComponent" />
                    </template>
                </ModalTemplate>
            </div>
        </Transition>

            <h1 class="title">USUARIOS</h1>
            <div class="inventory-table">
                <ViewOptions @showModal="showModal"></ViewOptions>
                <UserTable class="user-table" :labels="labels">
                    <template v-slot:body>
                        <BodyUsers>
                            
                        </BodyUsers>
                    </template>
                </UserTable>
            </div>
        </div>
        <NotiComp class="notis-cont"></NotiComp>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { onClickOutside } from '@vueuse/core';

    import AddUserForm from '../components/users-components/userModal.vue';
    import ViewOptions from '../components/users-components/viewOptions.vue'
    import ModalTemplate from '../components/comun-components/modalTemplate.vue'

    import UserTable from '../components/comun-components/tableTemplate.vue';
    import BodyUsers from '../components/users-components/bodyUsers.vue'

    import NotiComp from '../components/notification-components/notificationscomponent.vue';

    const labels = ['Documento', 'Usuario', 'Nombres', 'Apellidos', 'Correo', 'Acciones'];

    const modal = ref(false);

    const userComponent = ref(null);
    const modalElement = ref(null);

    onClickOutside(modalElement, () => {
        modal.value = false
    });

    const showModal = () => {
        modal.value = true;
    }

    const sendUser = () => {
        userComponent.value.addUser();
    }

    const setUser = ()=> {
        
    }

</script>

<style scoped>

    .main-inventory {
        width: var(--some-tables);
        margin-right: 3%;
    }
    
    .user-table {
        background: white;
        border-radius: 10px;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.4);
    }
    
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
        z-index: 101;
    }
    .title{
        font-family: Gilroy-Bold;
        font-size: 25px;
        margin-bottom: 20px;
    }
</style>