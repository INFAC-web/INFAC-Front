<template>
    <div class="main">
        <LogIn class="login"/>
    </div>
        
</template>

<script setup>
    import { ref } from 'vue';
    import LogIn from '../components/login-components/loginForm.vue';
</script>

<style scoped>
    .main {
        height: calc(100vh - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login {
        width: 50%;
        padding: 10px;
    }
</style>