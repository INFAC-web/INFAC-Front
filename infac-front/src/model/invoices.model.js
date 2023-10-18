import api from './axios/axios.js';
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

export const generateInvoice = async ( invoiceInfo ) => {
    try {
        await userStore.refreshToken();
        console.log(invoiceInfo)
        
        const res = await api({
            url: '/invoices/register',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            },
            data: invoiceInfo
        });   

        return res.data;
    } catch (error) {
        throw error.response;
    }
}

export const getInvoicesFromApi = async () => {
    try {
        await userStore.refreshToken();
        
        const res = await api({
            url: '/invoices/',
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