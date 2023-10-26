<template>
    <div class="notebook-div">
        <div class="sections">
            <h2>LIBRETA</h2>
            <ul>
            <li>
                <router-link to="history" class="link" active-class="link-selected">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 7.41406C16.25 7.41406 17.487 6.80469 13 6.80469C11.393 6.80469 9.82215 7.28121 8.486 8.174C7.14985 9.06678 6.10844 10.3357 5.49348 11.8204C4.87852 13.305 4.71762 14.9387 5.03112 16.5148C5.34463 18.0909 6.11846 19.5386 7.25476 20.6749C8.39106 21.8112 9.8388 22.5851 11.4149 22.8986C12.991 23.2121 14.6247 23.0512 16.1093 22.4362C17.594 21.8212 18.8629 20.7798 19.7557 19.4437C20.6485 18.1075 21.125 16.5367 21.125 14.9297" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                        <path d="M13 2.94531L17.0625 7.00781L13 11.0703" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                    </svg>
                    <span>Historico</span>
                </router-link>
            </li>
            <li>
                <router-link to="providers" class="link" active-class="link-selected">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 10.125V6.32812C3.375 5.76868 3.59724 5.23216 3.99282 4.83657C4.38841 4.44099 4.92493 4.21875 5.48438 4.21875H9.48639C9.90288 4.21876 10.31 4.34207 10.6566 4.57313L12.1247 5.55187C12.4712 5.78293 12.8784 5.90624 13.2949 5.90625H21.5156C22.0751 5.90625 22.6116 6.12849 23.0072 6.52407C23.4028 6.91966 23.625 7.45618 23.625 8.01562V10.125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.3072 11.947L24.4518 20.6719C24.4518 21.2307 24.2301 21.7666 23.8353 22.1621C23.4405 22.5576 22.905 22.7803 22.3462 22.7812H4.65378C4.09498 22.7803 3.5594 22.5576 3.16461 22.1621C2.76983 21.7666 2.5481 21.2307 2.5481 20.6719L1.69274 11.947C1.67418 11.7148 1.7039 11.4812 1.78002 11.2611C1.85613 11.0409 1.97701 10.8389 2.13504 10.6678C2.29306 10.4966 2.4848 10.36 2.6982 10.2666C2.9116 10.1732 3.14203 10.125 3.37497 10.125H23.6302C23.8627 10.1257 24.0926 10.1745 24.3054 10.2682C24.5181 10.3619 24.7092 10.4986 24.8667 10.6697C25.0242 10.8408 25.1446 11.0425 25.2204 11.2623C25.2962 11.4821 25.3257 11.7152 25.3072 11.947Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Proveedores</span>
                </router-link>
            </li>
            <li>
                <router-link to="clients" class="link" active-class="link-selected">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 10.125V6.32812C3.375 5.76868 3.59724 5.23216 3.99282 4.83657C4.38841 4.44099 4.92493 4.21875 5.48438 4.21875H9.48639C9.90288 4.21876 10.31 4.34207 10.6566 4.57313L12.1247 5.55187C12.4712 5.78293 12.8784 5.90624 13.2949 5.90625H21.5156C22.0751 5.90625 22.6116 6.12849 23.0072 6.52407C23.4028 6.91966 23.625 7.45618 23.625 8.01562V10.125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.3072 11.947L24.4518 20.6719C24.4518 21.2307 24.2301 21.7666 23.8353 22.1621C23.4405 22.5576 22.905 22.7803 22.3462 22.7812H4.65378C4.09498 22.7803 3.5594 22.5576 3.16461 22.1621C2.76983 21.7666 2.5481 21.2307 2.5481 20.6719L1.69274 11.947C1.67418 11.7148 1.7039 11.4812 1.78002 11.2611C1.85613 11.0409 1.97701 10.8389 2.13504 10.6678C2.29306 10.4966 2.4848 10.36 2.6982 10.2666C2.9116 10.1732 3.14203 10.125 3.37497 10.125H23.6302C23.8627 10.1257 24.0926 10.1745 24.3054 10.2682C24.5181 10.3619 24.7092 10.4986 24.8667 10.6697C25.0242 10.8408 25.1446 11.0425 25.2204 11.2623C25.2962 11.4821 25.3257 11.7152 25.3072 11.947Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Clientes</span>
                </router-link>
            </li>
            <li>
                <router-link to="history" class="link" active-class="link-selected">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 9H6C4.34315 9 3 10.3431 3 12V24C3 25.6569 4.34315 27 6 27H26C27.6569 27 29 25.6569 29 24V12C29 10.3431 27.6569 9 26 9Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M25.71 8.99997V7.12497C25.7099 6.6651 25.6082 6.21093 25.4123 5.79486C25.2164 5.3788 24.9311 5.01109 24.5768 4.71799C24.2224 4.42488 23.8077 4.21359 23.3623 4.0992C22.9169 3.98481 22.4517 3.97013 22 4.05622L5.54 6.8656C4.8252 7.00181 4.18035 7.38321 3.71665 7.944C3.25296 8.50478 2.99951 9.20981 3 9.93747V13" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M23 20C22.6044 20 22.2178 19.8827 21.8889 19.6629C21.56 19.4432 21.3036 19.1308 21.1522 18.7654C21.0009 18.3999 20.9613 17.9978 21.0384 17.6098C21.1156 17.2219 21.3061 16.8655 21.5858 16.5858C21.8655 16.3061 22.2219 16.1156 22.6098 16.0384C22.9978 15.9613 23.3999 16.0009 23.7654 16.1522C24.1308 16.3036 24.4432 16.56 24.6629 16.8889C24.8827 17.2178 25 17.6044 25 18C25 18.5304 24.7893 19.0391 24.4142 19.4142C24.0391 19.7893 23.5304 20 23 20Z" fill="black"/>
                    </svg>
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
        width: 50%;
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

    .link svg {
        margin-right: 20px;
        width: 25px;
    }

    .link-selected svg path {
        
        stroke: #581BFB;
    }

    .link-selected span {
        color: #581BFB;
        font-weight: bold;
    }

</style>