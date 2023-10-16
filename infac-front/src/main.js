import { createApp } from 'vue';
import './assets/styles/fonts.css';
import './assets/styles/global.css';
import 'vue3-toastify/dist/index.css';

import router from './router/index.js'
import { createPinia } from 'pinia'; // Importa createPinia

import App from './App.vue';

const pinia = createPinia(); // Crea una instancia de Pinia

const app = createApp(App);

app.use(pinia); // Usa Pinia en la aplicación Vue
app.use(router);
app.mount('#app');