<template>
    <tbody>
        <tr v-for="user in users" :key="user.uid" class="row">
            <td>{{ user.docNumber }}</td>
            <td>{{ user.nameUser }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email}}</td>
            
            <td class="buttons-opts">
                <button @click="getMyUser(user.nameUser)" class="edit-button"> 
                    <img :src="`${iconPaths.tablesIcons}/edit-icon.svg`" alt="">
                </button>
                <button class="disable-button"> 
                    <img :src="`${iconPaths.tablesIcons}/disable-icon.svg`" alt="">
                </button>
            </td>

        </tr>
    </tbody>
</template>

<script setup>
    import { ref } from "vue";
    import { getUsersFromApi, getUser } from '@/model/users.model.js'
    import { config } from '@/config.js';
    const { iconPaths } = config;

    const users = ref(null);
    const user = ref(null);

    const getUsers = async () => {
        users.value = await getUsersFromApi();
        console.log(users.value)
    }

    const getMyUser = async (userName) => {
        user.value = await getUser(userName);
        console.log(user.value);
    }

    getUsers();
</script>

<style scoped>
    tr {
        height: 70px;
    }

    .buttons-opts{
        background: WHITE;
    }
    
</style>