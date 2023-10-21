import api from './axios/axios.js'
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

export const getUser = async (nameUser) => {
    try {
        await userStore.refreshToken();
        
        const res = await api({
            url: '/auth/user/' + nameUser,
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            }
        });   

        return res.data;
    } catch (error) {
        console.log(error.response);
        throw error.response;
    }
}


export const getUsersFromApi = async () => {
    try {
        await userStore.refreshToken();
        
        const res = await api({
            url: '/auth/user/',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            }
        });   

        return res.data;
    } catch (error) {
        console.log(error.response);
        throw error.response;
    }
}


export const registerUser = async ( userInfo ) => {
    try {
        await userStore.refreshToken();
        
        const res = await api({
            url: '/auth/register',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            },
            data: userInfo
        });   

        return res.data;
    } catch (error) {
        console.log(error.response);
        throw error.response;
    }
}


