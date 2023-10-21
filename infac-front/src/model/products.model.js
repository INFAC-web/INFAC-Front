import api from './axios/axios.js'
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

export const registerProduct = async (productInfo) => {
    try {
        await userStore.refreshToken();

        const res = await api({
            url: '/products/register',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            },
            data: productInfo
        });   
        return res.data;
    } catch (error) {
        console.log(error)
        throw error.response;
    }
}

/* Obtiene todos los productos de la base de datos */
export const getProductsFromApi = async ( ) => {
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
        throw error.response;
    }
}


/* Obtiene un producto por código de producto */
export const getProductFromApi = async ( productCode ) => {
    try {
        await userStore.refreshToken();
        const res = await api({
            url: '/products/toinvoice/' + productCode,
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

/* Obtiene un producto por código de producto */
export const getFullProduct = async ( productId ) => {
    try {
        await userStore.refreshToken();
        const res = await api({
            url: '/products/' + productId,
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