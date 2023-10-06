<template>
    <div class="main-inventory">
        <transition v-bind="modal" v-if="modal" class="modal">
            <AddUserForm class="modal"/>
        </transition>

        <transition class="fade">
            <div v-bind="modal" v-if="modal" @click.prevent="modal=false" class="overlay"></div>
        </transition>

        <h1 class="title">USUARIOS</h1>
        <Users @updateModal="modal=true" />
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    import Users from '../components/users-components/usersTable.vue';
    import AddUserForm from '../components/inventory-component/productModal.vue';

    const modal = ref(false);
</script>

<style scoped>

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