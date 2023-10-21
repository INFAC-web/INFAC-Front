import api from './axios/axios.js';
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

export const getClientForInvoice = async (docNumber) => {
    try {        
        await userStore.refreshToken();
        const res = await api({
            url: '/clients/toinvoice/' + docNumber,
            method: 'get',
        });
        return res.data;
    } catch (error) {
        throw error.response;
    }
}

export const register = async (client) => {
    try {
        await userStore.refreshToken();
        const res = await api({
            url: '/clients/register',
            method: 'post',
            data: client
        });   
        return res.data;
    } catch (error) {
        throw error.response;
    }
}

export const getAllClients = async (client) => {
    try {
        await userStore.refreshToken();
        const res = await api({
            url: '/clients/',
            method: 'get',
        });   
        return res.data;
    } catch (error) {
        throw error.response;
    }
}

export const getByID = async (idClient) => {
    try {
        await userStore.refreshToken();        
        const res = await api({
            url: '/clients/byid/' + idClient,
            method: 'get',
        });   
        return res.data;
    } catch (error) {
        throw error.response;
    }
}