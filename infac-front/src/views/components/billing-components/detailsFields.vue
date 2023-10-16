<template>
    <div id="details">
                <div id="labels">
                    <div class="info-container">
                        <p class="info-value">{{ quant }}</p>
                        <p class="info-label">Items</p>
                    </div>
                    <div class="info-container">
                        <p class="info-value">$0</p>
                        <p class="info-label">Descuentos</p>
                    </div>
                    <div class="info-container">
                        <p class="info-value">19%</p>
                        <p class="info-label">IVA</p>
                    </div>
                    <div class="info-container">
                        <p class="info-value">${{ total }}</p>
                        <p class="info-label">Sub Total</p>
                    </div>
                    <div class="info-container">
                        <p class="info-value">$0</p>
                        <p class="info-label">Saldo a favor</p>
                    </div>
                    <div class="info-container">
                        <p class="info-value">$0</p>
                        <p class="info-label">Total</p>
                    </div>
                </div>
                <div id="actions">
                        <button id="freeze" @click="emit('save')">Congelar (F1)</button>
                        <button id="facture" @click="emit('facture')">Facturar (F3)</button>
                </div>
            </div>
</template>

<script setup>
    import { ref } from "vue";
    const emit = defineEmits(['save', 'facture']);

    const { quant, total } = defineProps(['quant', 'total'])
</script>

<style scoped>
    #labels {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: 120px;
        margin-left: 55px;
    }

    #details {
        position: absolute;
        left: 50%; 
        transform: translateX(-50%); 
        width: 95%;
        height: auto; 
        bottom: -15px;
        border-radius: 15px;
        background: #FFF;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding: 20px 25px;
    }

    .info-container {
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }

    .info-value{
        color: #000;
        font-family: Gilroy-Light;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0; 
    }

    .info-label{
        color: #616161;
        font-family: Gilroy-Bold;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
        margin-top: 8px;
    }

    button {
        color: #FFF;
        font-family: Gilroy-Bold;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 5px;
        border: none;
        padding: 10px;
    }

    #freeze {
        background: #0C8CE9;;
    }

    #facture {
        margin-left: 12px;
        background: #378039;
    }
</style>