<template>
    <div id="main-container">
            <form id="form-client" action="" style="">
                <div id="first-line">
                    <select  class="select" name="TypeDocument" v-model="currentClient.docType" >      
                        <option value="">Tipo de documento</option>
                        <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>

                    <input class="input" type="text" placeholder="Documento del cliente" v-model="docNumber" @keyup.enter="getClient">
                    <input class="input" type="text" placeholder="Nombre del cliente" v-model="currentClient.name">
                    <input class="input" type="text" placeholder="Apellidos del cliente" v-model="currentClient.lastName">
                    <input class="input" type="text" placeholder="Teléfono de contacto" v-model="currentClient.phoneNumber">
                    <input class="input" type="text" placeholder="Correo electrónico" v-model="currentClient.email">
                </div>

                <div id="second-line">
                    <select  class="select" name="Tipo-persona">      
                        <option value="selected">Tipo de Persona</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select  class="select" name="TypeDocument">      
                        <option value="selected">Departamento</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select  class="select" name="TypeDocument">      
                        <option value="selected">Municipio</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select  class="select" name="TypeDocument">      
                        <option value="selected">Barrio</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    
                    <input class="input" type="text" placeholder="Dirección">
                    <input class="input" type="text" placeholder="Descuento" v-model="currentClient.discountPercent">

                    <select class="select" name="TypeDocument" v-model="currentClient.respIVA">      
                        <option value="">Resp IVA</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                    <select  class="select" name="TypeDocument">
                        <option value="selected">Tipo de factura</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                </div>
            </form>
    </div>
</template>

<script setup>
    import { getClientForInvoice } from '@/model/clients.model.js';
    import { ref } from 'vue';

    const docNumber = ref('');

    const currentClient = ref(
        {
            docType: '',
            name : '',
            lastName: '',
            phoneNumber: '',
            email: '',
            discountPercent: '',
            respIVA: ''
        }
    );

    const getClient = async () => {
        currentClient.value = await getClientForInvoice(docNumber.value);
        console.log(currentClient.value);
    }

</script>
<style scoped>

@import url('../../../assets/styles/global.css');


#first-line, #second-line {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        gap: 20px;
}

#second-line{
    margin-top: 15px;
}

#form-client {
    width: 100%;
}

::placeholder {
        color: #D7D7D7;
}
</style>