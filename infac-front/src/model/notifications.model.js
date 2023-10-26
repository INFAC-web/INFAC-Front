import api from './axios/axios.js'
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

/* Obtiene todos los productos de la base de datos */
export const getNotis = async ( ) => {
    try {
        await userStore.refreshToken();
        const res = await api({
            url: '/notis/',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            }
        });   
        
        return res.data;
    } catch (error) {
        throw error.response;
    }
}