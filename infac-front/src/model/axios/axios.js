import axios from 'axios';
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
});

api.interceptors.request.use((config) => {
    config.headers['Authorization'] = 'Bearer ' + userStore.token.value;
    return config;
})

export default api;