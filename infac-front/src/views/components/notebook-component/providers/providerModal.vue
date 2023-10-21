<template>
    <div class="provider-modal">
        <h2>AGREGAR PROVEEDOR</h2>
        <div class="first-line">
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="provider.docNumberProvider" required>
                <label for="name" class="label">Doc. Representante</label>
            </div>
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="provider.providerName" required>
                <label for="name" class="label">Nombre Representante</label>
            </div>
        </div>
        <div class="second-line">
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="provider.nitCompany" required>
                <label for="name" class="label">NIT del negocio</label>
            </div>
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="provider.companyName" required>
                <label for="name" class="label">Nombre del negocio</label>
            </div>
        </div>
        <div class="third-line">
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="provider.phoneNumber" required>
                <label for="name" class="label">Telefono</label>
            </div>
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="provider.email" required>
                <label for="name" class="label">Correo</label>
            </div>
        </div>
        <div class="fourth-line">
            <select class="select">
                <option value="">Forma de pago</option>
            </select>
            <select class="select" v-model="provider.bank">
                <option value="">Banco</option>
            </select>
            <div class="inputGroup">
                <input type="text" autocomplete="off" class="entry" v-model="provider.accountNumber" required>
                <label for="name" class="label">Número de cuenta</label>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['provider']);

    const { provider } = props;
</script>

<style scoped>

    .provider-modal {
        padding: 20px;
        width: 450px;
    }

    h2 {
        font-family: Gilroy-Medium;
        font-size: 20px;
        text-align: center;
    }
    
    
    .first-line, .second-line, .third-line, .fourth-line {
        display: grid;
        gap: 20px;
        margin-top: 20px;
    }

    .first-line, .second-line {
        grid-template-columns: 0.6fr 1fr;
    }

    .third-line {
        grid-template-columns: 0.7fr 1fr;
    }

    .fourth-line {
        grid-template-columns: 0.6fr 0.4fr 1fr;
    }
</style>