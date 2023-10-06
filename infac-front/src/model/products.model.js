import api from './axios/axios.js'
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

export const getProductsFromApi = async () => {
    try {
        await userStore.refreshToken();
        
        const res = await api({
            url: '/products/',
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