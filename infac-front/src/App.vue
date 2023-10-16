
<template>
    <div class="container">
        <!-- Layout Menu -->
        <div class="nav-container" v-if="userStore.token">
            <NavBar />
        </div>

        <div id="error">
            
        </div>

        <!-- Router View para contenido -->
        <div class="content-container">
            <router-view></router-view>
        </div>
  </div>
</template>

<script setup>
    import NavBar from '@/views/layouts/navBar.vue'

    import { useUserCounterStore } from './store/userStore.js'
    const userStore = useUserCounterStore();

    userStore.refreshToken();
</script>

<style>
    .content-container{
        padding-top: 50px;
        padding-left: 7%;
        padding-right: 3%;
    }
    
    body {
        margin: 0;
        background: #F8F7F7;
        overflow-y: hidden;
    }
</style>
