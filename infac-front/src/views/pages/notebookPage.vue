<template>
    <div class="notebook-div">
        <div class="sections">
            <h2>LIBRETA</h2>
            <ul>
            <li>
                <router-link to="history" class="link">
                    <img :src="`${iconPaths.notebookPath}/history-icon.svg`" alt="">
                    <span>Historico</span>
                </router-link>
            </li>
            <li>
                <router-link to="providers" class="link">
                    <img :src="`${iconPaths.notebookPath}/client-provider-icon.svg`" alt="">
                    <span>Proveedores</span>
                </router-link>
            </li>
            <li>
                <router-link to="clients" class="link">
                    <img :src="`${iconPaths.notebookPath}/client-provider-icon.svg`" alt="">
                    <span>Clientes</span>
                </router-link>
            </li>
            <li>
                <router-link to="history" class="link">
                    <img :src="`${iconPaths.notebookPath}/wallet-icon.svg`" alt="">
                    <span>Cartera</span>
                </router-link>
            </li>
        </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import { config } from '@/config.js';
    const { iconPaths } = config
</script>

<style scoped>
    h2 {
        font-family: Gilroy-Bold;
        margin-bottom: 30px;
    }
    
    .content {
        /*width: 55%;*/
        margin-left: 50px;
        background-color: #FFFFFF;
        padding: 30px;
        padding-top: 15px;
        margin-top: 4%;
        border-radius: 15px;
    }

    .sections {
        width: 10%
    }

    .notebook-div{
        display: flex;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
    }

    .link {
        font-family: Gilroy-Medium;
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .link img {
        margin-right: 20px;
        width: 25px;
    }
</style>