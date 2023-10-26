<template>
  <div id="main-container">
    <form class="form">
       <p class="form-title">Ingresa a tu cuenta</p>
        <div class="inputGroup">
          <input type="text" autocomplete="off" class="entry" v-model="user" required>
          <label for="name" class="label">Usuario</label>
        </div>
        <div class="inputGroup">
          <input type="text" autocomplete="off" class="entry" v-model="pwd" required>
          <label for="name" class="label">Contraseña</label>
        </div>
  
         <button type="button" class="submit" @click="logIn"> Ingresar </button>
      <!--<button type="button" class="submit" @click="userStore.logOut"> Logout </button>-->
   </form>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import api from '../../../model/axios/axios.js';
    import { useUserCounterStore } from '../../../store/userStore.js';
    import router from '@/router/index.js'

  
    const userStore = useUserCounterStore();

    const user = ref('');
    const pwd = ref('');

    const logIn = async () => {
        try {
          const userInfo = {nameUser: user.value, password: pwd.value}    
          const response = await api.post("/auth/ ", userInfo);   

          console.log(response)
          
          if(response.data.status == 'pending'){
            console.log("Redirijido")
            router.push({name: 'changepwd'})

          } else {
            console.log("Inicio de sesion Exitoso")
            await userStore.refreshToken();
            router.push({name: 'users'});
          }

         
        } catch (error) {
          
        }
       
    }

    const getClients = async () => {
        const res = await api({
            url: '/clients/',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + userStore.token.value
            }
        });    
        console.log(res.data);
    }

    userStore.refreshToken();
</script>

<style scoped>

.main-container {
  margin: auto;
}

p {
  font-family: Gilroy-Medium;
}


.form {
  background-color: #fff;
  display: grid;
  gap: 30px;
  padding: 1rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.submit {
  font-family: Gilroy-Medium;
  border: none;
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4F46E5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}

.form {
  margin: auto;
}

</style>