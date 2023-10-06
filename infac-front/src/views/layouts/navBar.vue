<template>
    <div class="main-nav">
        <ul id="container-ul">
            <li id="icon-li">
                <img id="icon" src="@/assets/icons/infac-icon/infac-icon.svg" alt="">
            </li>
            <li id="nav-bar-li">
                <div id="nav-bar">
                    <ul id="list-routes">
                        <li>
                            <router-link to="/inventory">
                                <img :src="`${iconPaths.NavBarPath}/stadistics-icon.svg`" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/inventory">
                                <img :src="`${iconPaths.NavBarPath}/inventory-icon.svg`" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/users">
                                <img :src="`${iconPaths.NavBarPath}/users-icon.svg`" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/notebook/history">
                                <img :src="`${iconPaths.NavBarPath}/notebook-icon.svg`" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/billing">
                                <img :src="`${iconPaths.NavBarPath}/invoice-icon.svg`" alt="">
                            </router-link>
                        </li>
                    </ul>
                    <ul id="list-options">
                        <li>
                            <router-link to="/inventory">
                                <img :src="`${iconPaths.NavBarPath}/notifications-icon.svg`" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/inventory">
                                <img :src="`${iconPaths.NavBarPath}/perfil-icon.svg`" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/inventory">
                                <img :src="`${iconPaths.NavBarPath}/config-icon.svg`" alt="">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    
</template>

<script setup>        
    import { config } from '@/config.js';
    const { iconPaths } = config

    console.log(iconPaths.NavBarPath);
</script>

<style scoped>

    #icon {
        height: 54px;
        margin-left: 10px;
        margin-top: 10px;
    }

    .main-nav{
        position: fixed;
        display: inline-block;
        margin: 0px;
    }

    #nav-bar {
        display: inline-block;
        border-radius: 0px 15px 0px 0px;
        background: #FFF;
        padding: 40px 15px 40px 15px;
        margin-top: 15px;
        min-height: calc(100vh - 50px); /* Calcula la altura mínima en función de la altura de la ventana y un margen superior e inferior deseado */
    }

    #nav-bar ul {
        padding: 0;
        margin: 0;
        text-align: center; 
    }

    #nav-bar li {
        list-style: none;
        width: 22px;
        padding: 0;
        margin: 0;
        margin-bottom: 30px;
    }

    #container-ul {
        padding: 0;
        margin: 0;
    }

    #icon-li, #nav-bar-li{
        list-style: none;
    }

    

</style>