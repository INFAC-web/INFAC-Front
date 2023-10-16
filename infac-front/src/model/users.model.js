import api from './axios/axios.js'
import myUseUserStore from '@/store/myUserStore.js';

const userStore = new myUseUserStore();

export const getUser = async (uid) => {
    try {
        await userStore.refreshToken();
        
        const res = await api({
            url: '/auth/user/' + uid,
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