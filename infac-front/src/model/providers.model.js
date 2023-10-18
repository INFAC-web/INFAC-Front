import api from './axios/axios.js'
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

export const getProvidersFromApi = async () => {
    try {
        await userStore.refreshToken();
        const res = await api({
            url: '/providers/',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            }
        });   

        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProviderFromApi = async (idProvider) => {
    try {
        await userStore.refreshToken();
        
        const res = await api({
            url: '/providers/' + idProvider,
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            }
        });   

        return res.data;
    } catch (error) {
        console.log(error);
    }
}


