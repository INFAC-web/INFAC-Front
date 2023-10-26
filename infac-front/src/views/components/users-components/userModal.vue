<template>
    <div class="main-form">
        <h1>AGREGAR USUARIO</h1>
        <div class="first-line">
            <select  class="select" name="Tipo-persona" v-model="user.docType">      
                <option value="">Tipo de Documento</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
            </select>
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="user.docNumber" required>
                <label for="name" class="label">Número de documento</label>
            </div>
        </div>
        <div class="second-line">
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="user.name" required>
                <label for="name" class="label">Nombres</label>
            </div>
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="user.lastName" required>
                <label for="name" class="label">Apellidos</label>
            </div>
        </div>

        <div class="third-line">
            <div class="inputGroup">
                <input type="number" autocomplete="off" class="entry" v-model="user.phoneNumber" required>
                <label for="name" class="label">Número de teléfono</label>
            </div>
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="user.email" required>
                <label for="name" class="label">Correo</label>
            </div>
            <select  class="select" v-model="user.Rol_idRol">      
                <option value="">Rol</option>
                <option value=1>Administrador</option>
                <option value=2>Empleado</option>
                <option value=3>Bodega</option>
            </select>
        </div>
       
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { registerUser } from '@/model/users.model.js'

    const userEntity = {
        Rol_idRol: '',
        docType: '',
        docNumber: '',
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    }

    const user = ref(userEntity);

    const addUser = async () => {
        try {
            console.log(user.value)
           const res = await registerUser(user.value);
        } catch (error) {
            console.log(error)
        }
    }

    defineExpose({
        addUser
    })
</script>

<style scoped>

    .main-form{
        padding: 20px;
    }

    h1 {
        font-family: Gilroy-Medium;
        font-size: 20px;
        text-align: center;
        padding: 0;
        margin: 10px;
        margin-bottom: 20px;
    }

    .first-line, .second-line, .third-line {
        display: grid;
        gap: 20px;
        margin-top: 20px;
    }

    .first-line, .second-line{
        grid-template-columns: 1fr 1fr;
    }

    .third-line {
        grid-template-columns: 1fr 1fr 0.5fr;
    }

</style>
