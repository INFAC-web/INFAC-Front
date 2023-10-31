<template>
    <div id="payment-modal">
        <h1 id="title-modal">¿Desea Facturar?</h1>
        <div id="first-line">
            <div class="inputGroup">
                    <input type="text" autocomplete="off" class="entry" v-model="nickName" @blur="getUserPay" required>
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
            <div class="inputGroup money">
                    <input type="number" autocomplete="off" class="entry" v-model="total" required>
                    <label for="name" class="label">Total</label>
            </div>
            <div class="inputGroup money">
                    <input type="text" autocomplete="off" class="entry" v-model="money" @input="getCambio" required>
                    <label for="name" class="label">Recibido</label>
            </div>
        </div>

        <div id="change">
            <p class="info-value">${{ change }}</p>
            <p class="info-label">Cambio</p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { getUser } from '@/model/users.model.js';
    import { generateInvoice } from '@/model/invoices.model.js';

    import ErrorHandler from '@/store/errorHandler.js'; 
    const errorHandler = new ErrorHandler();

    const props = defineProps(['invoiceInfo', 'fullTotal']);

    const invoiceInfo = ref(props.invoiceInfo)
    const total = ref(props.fullTotal)
    const money = ref(0)
    const change = ref(0)

    const optionPay = ref('');
    const nickName = ref('');
    const userName = ref('')

    let user = null; 
    
    const getUserPay = async () => {
        try {
            if(!nickName.value) throw new Error ('Ingrese un nombre de usuario válido')
            user = await getUser(nickName.value);
            nickName.value = user.nameUser;
            userName.value = user.name + " " + user.lastName;
        } catch (error) {
            errorHandler.show(error)
        }   
    }

    /* Envía la información de la factura al servidor */
    const sendInvoice = async ( invoiceInfo ) => {
        try {
            if(!optionPay.value) throw new Error ('Seleccione una opción de pago válida')
            const res = await generateInvoice(invoiceInfo);

            return res;
        } catch (error) {
            errorHandler.show(error);
        }
    }
    
    const getCambio = () => {
        console.log(money.value)
        console.log(total.value)
        if(!total.value || !money.value) {change.value = 0; return};
        if(money.value < total.value) {change.value = 0; return};
        change.value =  money.value - total.value;
    }
    /* Retorna la opción de pago actual */
    const getOptionPay = () => {
        return optionPay.value;
    }

    /* Retorna el ID de usuario seleccionado */
    const getUserID = () => {
        return user.idUser;
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
        height: auto;
        padding-top: 35px;
        border-radius: 10px;
        display: grid; 
        gap: 20px;
        place-items: center;  
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 20px;
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

    .money {
        width: 30%;
    }

    .money input {
        text-align: center;
    }
</style>