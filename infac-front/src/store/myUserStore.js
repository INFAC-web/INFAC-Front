import { ref } from "vue";
import api from '../model/axios/axios.js'

//Clase SINGLETON
class myUseUserStore {
    static instancia;

    constructor () {
        if ( !!myUseUserStore.instancia ){
            return myUseUserStore.instancia;
        }

        myUseUserStore.instancia = this;

        this.token = ref(null);
        this.expiresIn = ref(null);
    }
    
    async refreshToken () {
        try {
            console.log("Refrescando Token")
            const res = await api.get('/auth/refresh');
            this.token.value = res.data.token;
            this.expiresIn.value = res.data.expiresIn;
        } catch (error) {
            console.log(error);
        }
    }

    async logOut () {
        try {
            await api.get('/auth/logout');
        } catch (error) {
            console.log(error);
        }  finally {
            resetStore();
        }
    }

    resetStore () {
        this.token.value = null;
        this.expiresIn.value = null;
    }
}

export default myUseUserStore;