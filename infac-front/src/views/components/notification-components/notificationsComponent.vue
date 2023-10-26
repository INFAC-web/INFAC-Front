<template>
    <div class="notifications">
        <h2>Notificaciones</h2>
        <div v-for="not in notis" :key="not.id" class="one-noti">
            <input type="text" v-model="not.title" disabled class="title">
            <input type="text" v-model="not.description" disabled>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { getNotis } from "../../../model/notifications.model.js";

    
    const notis = ref([]);

    const getAll = async () => {
        try {
            notis.value = await getNotis();
            console.log(notis.value)
        } catch (error) {
            console.log(error)
        }
    }

    getAll();
</script>

<style scoped>
    h2 {
        font-family: Gilroy-Medium;
        text-align: center;
    }

    input {
        display: block;
        width: 90%;
        font-family: Gilroy-Medium;
        font-size: 15px;
        background: none;
        border: none;
        outline: none;
    }

    input:disabled {
        color: inherit; /* Mantiene el color de texto predeterminado */
    }

    .title {
        font-size: 17px;
        font-weight: bold;
    }
   
   .one-noti {
        background: white;
        padding: 10px;
        border-bottom: 1px solid black;
   }

   .one-noti:hover{
        background: rgb(233, 233, 233);
   }
</style>