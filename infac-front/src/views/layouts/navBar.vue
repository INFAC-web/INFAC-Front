<template>
    <div class="main-nav">
        <ul id="container-ul">
            <li id="icon-li">
                <img id="icon" src="@/assets/icons/infac-icon/infac-icon.svg" alt="">
            </li>
            <li id="nav-bar-li">
                <div id="nav-bar">
                    <ul id="list-routes">
                        <!--
                        <li>
                            <router-link to="/dashboard" class="link" active-class="link-selected">
                                <svg class="svg-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.375 1.375V19.9375C1.375 20.1198 1.44743 20.2947 1.57636 20.4236C1.7053 20.5526 1.88016 20.625 2.0625 20.625H20.625" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.70312 9.625H4.98438C4.50976 9.625 4.125 10.0098 4.125 10.4844V17.0156C4.125 17.4902 4.50976 17.875 4.98438 17.875H6.70312C7.17774 17.875 7.5625 17.4902 7.5625 17.0156V10.4844C7.5625 10.0098 7.17774 9.625 6.70312 9.625Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.8906 7.5625H11.1719C10.6973 7.5625 10.3125 7.94726 10.3125 8.42188V17.0156C10.3125 17.4902 10.6973 17.875 11.1719 17.875H12.8906C13.3652 17.875 13.75 17.4902 13.75 17.0156V8.42188C13.75 7.94726 13.3652 7.5625 12.8906 7.5625Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.0627 4.8125H17.3439C16.8693 4.8125 16.4846 5.19726 16.4846 5.67188V17.0156C16.4846 17.4902 16.8693 17.875 17.3439 17.875H19.0627C19.5373 17.875 19.9221 17.4902 19.9221 17.0156V5.67188C19.9221 5.19726 19.5373 4.8125 19.0627 4.8125Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </router-link>
                        </li>
                         -->
                        <li v-if="userStore.rol='admin'">
                            <router-link to="/inventory" class="link" active-class="link-selected">
                                <svg class="svg-icon" width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 2.8158H13.75C14.3467 2.8158 14.919 3.07332 15.341 3.53172C15.7629 3.99013 16 4.61185 16 5.26013V21.5557C16 22.204 15.7629 22.8257 15.341 23.2841C14.919 23.7425 14.3467 24 13.75 24H3.25C2.65326 24 2.08097 23.7425 1.65901 23.2841C1.23705 22.8257 1 22.204 1 21.5557V5.26013C1 4.61185 1.23705 3.99013 1.65901 3.53172C2.08097 3.07332 2.65326 2.8158 3.25 2.8158H4.75" stroke="#656565" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M10.9317 1H6.0684C5.41699 1 4.88892 1.55319 4.88892 2.23559V2.79073C4.88892 3.47312 5.41699 4.02632 6.0684 4.02632H10.9317C11.5831 4.02632 12.1111 3.47312 12.1111 2.79073V2.23559C12.1111 1.55319 11.5831 1 10.9317 1Z" stroke="#656565" stroke-width="2" stroke-linejoin="round"/>
                                </svg>  
                            </router-link>
                        </li>
                        <li v-if="userStore.rol='admin'">
                            <router-link to="/users" class="link" active-class="link-selected">
                                <svg class="svg-icon" width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4049 4.5C18.2689 6.47701 16.8685 8 15.3415 8C13.8144 8 12.4118 6.4775 12.2781 4.5C12.1388 2.44326 13.5021 1 15.3415 1C17.1809 1 18.5441 2.48069 18.4049 4.5Z" stroke="#656565" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.3415 10.5C12.3279 10.5 9.42999 12.0896 8.70401 15.1853C8.60783 15.5949 8.84967 16 9.24595 16H21.4374C21.8337 16 22.0741 15.5949 21.9794 15.1853C21.2534 12.04 18.3554 10.5 15.3415 10.5Z" stroke="#656565" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M9.18715 5.24716C9.07443 6.78716 7.90005 8 6.63416 8C5.36826 8 4.19196 6.78763 4.08117 5.24716C3.96604 3.64504 5.10911 2.5 6.63416 2.5C8.15921 2.5 9.30227 3.67444 9.18715 5.24716Z" stroke="#656565" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.19512 11.012C8.34504 10.6422 7.40878 10.5 6.41647 10.5C3.96749 10.5 1.608 11.656 1.01694 13.9075C0.939236 14.2053 1.1361 14.5 1.45823 14.5H6.74614" stroke="#656565" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>                            
                            </router-link>
                        </li>
                        <li v-if="userStore.rol='admin'">
                            <router-link to="/notebook/history" class="link" active-class="link-selected">
                                <svg class="svg-icon" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 5.75C13.2857 2.6249 16.2533 1.0292 22.7143 1.00001C22.8176 0.999613 22.9199 1.01982 23.0154 1.05947C23.1109 1.09911 23.1977 1.15741 23.2707 1.231C23.3438 1.3046 23.4016 1.39202 23.441 1.48825C23.4803 1.58448 23.5004 1.6876 23.5 1.79167V16.0417C23.5 16.2516 23.4172 16.453 23.2699 16.6015C23.1225 16.7499 22.9227 16.8333 22.7143 16.8333C16.4286 16.8333 14.0002 18.1104 12.5 20M12.5 5.75C11.7143 2.6249 8.74674 1.0292 2.28572 1.00001C2.18243 0.999613 2.08008 1.01982 1.98458 1.05947C1.88908 1.09911 1.80231 1.15741 1.72927 1.231C1.65623 1.3046 1.59837 1.39202 1.55902 1.48825C1.51967 1.58448 1.49962 1.6876 1.50001 1.79167V15.9462C1.50001 16.435 1.80054 16.8333 2.28572 16.8333C8.57143 16.8333 11.0086 18.1198 12.5 20M12.5 5.75V20" stroke="#656565" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/billing" class="link" active-class="link-selected">
                                <svg class="svg-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.32355 15.8824V1L8.94119 1.8268L10.5588 1L12.1735 1.8268L13.8098 1L15.4118 1.8268L17.0188 1L18.6329 1.8268L20.2647 1L21.8829 1.8268L23.5 1V12.5752" stroke="#616161" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M23.5 12.647V18.6862C23.5 19.8303 23.0861 20.9275 22.3493 21.7365C21.6126 22.5455 20.6134 23 19.5714 23M19.5714 23C18.5295 23 17.5303 22.5455 16.7935 21.7365C16.0568 20.9275 15.6429 19.8303 15.6429 18.6862V16.098H2.28574C2.18231 16.097 2.07972 16.1186 1.98398 16.1616C1.88824 16.2046 1.80126 16.2681 1.72812 16.3485C1.65497 16.4288 1.59713 16.5243 1.55797 16.6294C1.51881 16.7345 1.49911 16.8472 1.50003 16.9608C1.50003 20.4117 1.83101 23 5.4286 23H19.5714Z" stroke="#616161" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M11.2059 6.17645H19.6176M14.0098 10.0588H19.6176" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </router-link>
                        </li>
                    </ul>
                    <ul id="list-options">
                        <!--
                        <li>
                            <router-link to="/inventory">
                                <img :src="`${iconPaths.NavBarPath}/notifications-icon.svg`" alt="">
                            </router-link>
                        </li>
                        -->
                        <li>
                            <button class="button" @click="salir">
                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0385 5.5V3.25C16.0385 2.65326 15.8055 2.08097 15.3907 1.65901C14.976 1.23705 14.4135 1 13.8269 1H3.21154C2.625 1 2.06249 1.23705 1.64774 1.65901C1.233 2.08097 1 2.65326 1 3.25V16.75C1 17.3467 1.233 17.919 1.64774 18.341C2.06249 18.7629 2.625 19 3.21154 19H13.8269C14.4135 19 14.976 18.7629 15.3907 18.341C15.8055 17.919 16.0385 17.3467 16.0385 16.75V14.5M19.5769 5.5L24 10M24 10L19.5769 14.5M24 10H8.90625" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </li>
                        <!--
                        <li>
                            <router-link to="/inventory">
                                <img :src="`${iconPaths.NavBarPath}/config-icon.svg`" alt="">
                            </router-link>
                        </li>
                        -->
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    
</template>

<script setup>        
    import { config } from '@/config.js';
    import router from '@/router/index.js'

    import { useUserCounterStore } from '../../store/userStore.js';

    const { iconPaths } = config

    const userStore = useUserCounterStore();

    console.log(iconPaths.NavBarPath);

    const salir = async () => {
        await userStore.logOut()
        router.push({name: 'login'})
    }


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
        border-radius: 0px 10px 0px 0px;
        background: #FFF;
        padding: 40px 2px;
        margin-top: 15px;
        min-height: calc(100vh - 50px);
    }

    #nav-bar ul {
        padding: 0;
        margin: 0;
        text-align: center; 
    }

    #nav-bar li {
        list-style: none;
        width: 45px;
        height: 32px;
        margin-bottom: 20px;
    }

    #container-ul {
        padding: 0;
        margin: 0;
    }

    #icon-li, #nav-bar-li{
        list-style: none;
    }

    .button {
        background: none;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
    }

    #list-options{
        position: absolute;
        bottom: 100px;
        
    }

    .link {
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 0px 2px 2px 0px;
        box-sizing: border-box;
        border-left: 2px solid #ffffff;
    }

    .link:hover {
        background: #ececec;
        border-left: 2px solid #581BFB;
    }

    .link-selected .svg-icon path {
        stroke: #581BFB;
    }

    .link .svg-icon:hover path {
        stroke: #581BFB;
        
    }
    
    .link-selected {
        border-left: 2px solid #581BFB;
    }

</style>