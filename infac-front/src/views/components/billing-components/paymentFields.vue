<template>
    <div id="payment-modal">
        <h1 id="title-modal">¿Desea Facturar?</h1>
        <div id="first-line">
            <div class="inputGroup">
                    <input type="text" autocomplete="off" class="entry" v-model="userID" @blur="getUserPay" required>
                    <label for="name" class="label">Código del vendedor</label>
            </div>
            <div class="inputGroup">
                    <input type="text" autocomplete="off" class="entry" v-model="userName" required>
                    <label for="name" class="label">Nombre del vendedor</label>
            </div>
        </div>

        <div id="second-line">
            <select  class="select" name="Tipo-persona" v-model="optionPay">      
                <option value="">Tipo de pago</option>
                <option value="CONTADO">Pago de contado</option>
                <option value="CREDITO">Pago a crédito</option>
            </select>
            <div class="inputGroup" id="days" v-if="optionPay === 'Pago a crédito'">
                    <input type="text" autocomplete="off" class="entry" required>
                    <label for="name" class="label">Días</label>
            </div>
        </div>
        
        <div id="third-line">
            <div class="inputGroup">
                    <input type="text" autocomplete="off" class="entry" required>
                    <label for="name" class="label">Total</label>
            </div>
            <div class="inputGroup">
                    <input type="text" autocomplete="off" class="entry" required>
                    <label for="name" class="label">Recibido</label>
            </div>
        </div>

        <div id="change">
            <p class="info-value">$0</p>
            <p class="info-label">Cambio</p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { getUser } from '@/model/users.model.js';
    import { generateInvoice } from '@/model/invoices.model.js';

    const props = defineProps(['invoiceInfo']);

    const invoiceInfo = ref(props.invoiceInfo)

    const optionPay = ref('');
    const userID = ref('');
    const userName = ref('')

    let user = null; 
    
    const getUserPay = async () => {
        user = await getUser(userID.value);
        userID.value = parseInt(user.idUser);
        userName.value = user.name + " " + user.lastName;
    }

    /* Envía la información de la factura al servidor */
    const sendInvoice = async ( invoiceInfo ) => {
        console.log("eee")
        console.log(invoiceInfo)
        const res = await generateInvoice(invoiceInfo);
        console.log(res);
    }

    /* Retorna la opción de pago actual */
    const getOptionPay = () => {
        return optionPay.value;
    }

    /* Retorna el ID de usuario seleccionado */
    const getUserID = () => {
        return userID.value;
    }

    /* Define los métodos que serán públicos */
    defineExpose({
        getOptionPay,
        getUserID,
        sendInvoice
    })
</script>

<style scoped>

    #title-modal{
        margin: 0;
        margin-bottom: 10px;
        font-family: Gilroy-Medium;
        font-size: 25px;
    }

   #payment-modal {
        width: 30%;
        height: auto;
        padding-top: 35px;
        border-radius: 10px;
        display: grid; 
        gap: 20px;
        place-items: center;    
    }

    #first-line, #second-line, #third-line {
        display: flex;
        justify-content: center;
    }

    .inputGroup {
        margin: 0px 10px;
    }

    #change {
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }

    p {
        margin: 0;
    }

    .info-value {
        font-family: Gilroy-Light;
        font-size: 30px;
    }

    .info-label {
        font-family: Gilroy-Bold;
        font-size: 15px;
    }
</style>