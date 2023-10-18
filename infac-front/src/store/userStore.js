import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/model/axios/axios.js';

export const useUserCounterStore = defineStore('user', () => {
    
    const token = ref(null);
    const expiresIn = ref(null);
    
    const refreshToken = async () => {
        try {
            console.log("Refrescando Token")
            const res = await api.get('/auth/refresh');
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;

        } catch (error) {
            console.log(error)
        }
    }

    const logOut = async () => {
        try {
            await api.get('/auth/logout');
        } catch (error) {
            console.log(error)
        }  finally {
            resetStore();
        }
    }

    const resetStore = () => {
        token.value = null;
        expiresIn.value = null;
    }

    const tokenInfo = () => {
        try {
            const tokenInf = JSON.parse(atob(token.value.split('.')[1]));
            console.log(tokenInf)
        } catch (error) {
            console.log(error);
        }
       
    }

    return {
        token,
        expiresIn,
        refreshToken,
        logOut,
        tokenInfo
    }
})