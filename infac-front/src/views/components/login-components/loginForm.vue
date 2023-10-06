<template>
  <div id="main-container">
    <form class="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input id="user" name="user" type="text" placeholder="Enter email" v-model="user">
          <span>
          </span>
      </div>
      <div class="input-container">
          <input id="pwd" name="pwd" type="password" placeholder="Enter password" v-model="pwd">
        </div>
         <button type="button" class="submit" @click="logIn"> Sign in </button>
      <button type="button" class="submit" @click="getClients"> Clients </button>
      <button type="button" class="submit" @click="userStore.logOut"> Logout </button>

      <p class="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
   </form>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import api from '../../../model/axios/axios.js'
    import { useUserCounterStore } from '../../../store/userStore.js';
  
    const userStore = useUserCounterStore();

    const user = ref('');
    const pwd = ref('');

    const logIn = async () => {
        const userInfo = {nameUser: user.value, password: pwd.value}    
        const response = await api.post("/auth/login", userInfo);    
        console.log("Inicio de sesion Exitoso")
        userStore.refreshToken();
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

.form {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 350px;
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

.input-container {
  position: relative;
}

.input-container input, .form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
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
</style>