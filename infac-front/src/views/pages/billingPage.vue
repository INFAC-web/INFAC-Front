<template>
    <div id="billing-main">
        <h1 id="title">FACTURACIÓN</h1>
        <div id="content">
            <Billing/>
            <form >
                <div style="display: flex; gap: 22.5px; justify-content: left; margin-top: 15px; align-items: center; ">
                    <input type="text" style="width: 175px;" placeholder="Código del prodcuto">
                    <input type="text" style="width: 176px;" placeholder="Nombre del producto">
                    <input type="text" style="width: 92px; " placeholder="U.Medida">
                    <input type="text" style="width: 121px;" placeholder="Precio Unitario">
                    <input type="text" style="width: 83px; " placeholder="Cantidad">
                    <input type="text" style="width: 48px; " placeholder="IVA">
                    
                    <button type="button" class="botonesTop" style="background-color: #0088AA;">
                    <img src="../assets/image/ojo.png" style="vertical-align: middle;">
                    </button>
                    <button type="button" class="botonesTop" style="background-color: #FF6262;">
                    <img src="../assets/image/garba.png" style="vertical-align: middle;"></button>
                    <button type="button" class="botonesTop" style="background-color: #378039;">
                    <img src="../assets/image/VectorPlus.png" style="vertical-align: middle;">
                    </button>
                </div>
            </form>
            <BillingTable id="billing-table"/>
            <div id="details">
                <div id="labels">
                    <div class="info-container">
                        <p class="info-value">0</p>
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
                        <p class="info-value">$0</p>
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
                        <button id="freeze">Congelar (F1)</button>
                        <button id="facture">Facturar (F3)</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import Billing from '../components/billing-components/billingComponent.vue';
    import BillingTable from '../components/billing-components/productsTable.vue';

</script>

<style scoped>

    input {
        height: 40px;
        border-radius: 10px;
        border: 1px solid #D7D7D7;
        font-family: Gilroy-Medium;
        font-size: 15px;
        
    }

    
    .botonesTop {
        height: 30px;
        width: 30px;
        cursor: pointer;
        border-radius: 30px;
        border: 0px;
        text-align: center;

    }

    #labels {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: 120px;
        margin-left: 55px;
    }

    #content { 
        position: relative;
        background-color: #FFFFFF;
        padding: 20px;
        border-radius: 15px;
        height: calc(100vh - 150px);
    }

    #details {
        position: absolute;
        left: 50%; 
        transform: translateX(-50%); 
        width: 95%;
        height: auto; /* La altura se ajustará automáticamente al contenido */
        bottom: -15px;
        border-radius: 15px;
        background: #FFF;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding: 20px 25px;
    }

    #billing-table {
        margin-top: 15px;
    }

    #billing-main {
        margin-top: -30px;
    }

    #title {
        font-family: Gilroy-Bold;
        font-size: 25px;
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