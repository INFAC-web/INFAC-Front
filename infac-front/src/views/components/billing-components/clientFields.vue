<template>
    <div id="main-container">
            <form id="form-client" action="" style="">
                <div id="first-line">
                    <select  class="select" name="TypeDocument" v-model="currentClient.docType" >      
                        <option value="">Tipo de documento</option>
                        <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>

                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry" v-model="docNumber" @keyup.enter="getClient" required>
                        <label for="name" class="label">Documento</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry" v-model="currentClient.name" required>
                        <label for="name" class="label">Nombre</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry" v-model="currentClient.lastName" required>
                        <label for="name" class="label">Apellidos</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry" v-model="currentClient.phoneNumber" required>
                        <label for="name" class="label">Teléfono</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry" v-model="currentClient.email" required>
                        <label for="name" class="label">Correo electrónico</label>
                    </div>
    
                </div>

                <div id="second-line">
                    <select  class="select" name="Tipo-persona" v-model="currentClient.personType">      
                        <option value="">Tipo de Persona</option>
                        <option value="natural">Natural</option>
                        <option value="juridico">Juridico</option>
                    </select>
                    <select  class="select" name="TypeDocument" v-model="address[0]">      
                        <option value=''>Departamento</option>
                        <option value="Santander">Santander</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select  class="select" name="TypeDocument" v-model="address[1]">      
                        <option value="">Municipio</option>
                        <option value="Bucaramanga">Bucaramanga</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select  class="select" name="TypeDocument" v-model="address[2]">      
                        <option value="">Barrio</option>
                        <option value="Centro">Centro</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry" v-model="address[3]" required>
                        <label for="name" class="label">Dirección</label>
                    </div>
                    <div class="inputGroup">
                        <input type="text" autocomplete="off" class="entry" v-model="currentClient.discountPercent" required>
                        <label for="name" class="label">Descuento</label>
                    </div>

                    <select class="select" name="TypeDocument" v-model="currentClient.respIVA">      
                        <option value="">Resp IVA</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                    <select  class="select" name="invoiceType" v-model="invoiceType" @blur="setInvoiceType">
                        <option value="">Tipo de factura</option>
                        <option value="ELECTRONICA">Factura Electrónica</option>
                        <option value="POS">Factura tipo P.O.S</option>
                        <option value="APARTADO">Apartado</option>
                        <option value="COTIZACION">Cotización</option>
                        <option value="NOTADEBITO">Nota crédito</option>
                        <option value="NOTACREDITO">Nota débito</option>
                        <option value="COMPRA">Compra</option>
                    </select>
                </div>
            </form>
    </div>
</template> 

<script setup>
    import { getClientForInvoice } from '@/model/clients.model.js';
    import { ref } from 'vue';
    import ErrorHandler from '@/store/errorHandler.js';
    const errorHandler = new ErrorHandler();

    const emit = defineEmits(['setClient', 'setInvoiceType']);

    const docNumber = ref(null);
    const invoiceType = ref('');
    
    const clientEntity = {
            docType: '',
            name : '',
            lastName: '',
            phoneNumber: '',
            email: '',
            discountPercent: '',
            personType: '',
            respIVA: '',
            address: ''
    }
    //---------------------- Entity Client
    const currentClient = ref(clientEntity);

    const address = ref(',,,'.split(","));

    // --------------------------- getters
    const getClient = async () => {
        try {
            if(!docNumber.value) throw new Error("Ingrese un documento válido");

            currentClient.value = await getClientForInvoice(docNumber.value);
            address.value = currentClient.value.address.split(",");
            emit('setClient', currentClient.value);
        } catch (error) {
            currentClient.value = clientEntity;
            address.value = ',,,'.split(",");
            errorHandler.show(error);
        }
    }

    // --------------------------- setters
    const setInvoiceType = () => {
        emit('setInvoiceType', invoiceType.value)
    }
</script>
<style scoped>

@import url('../../../assets/styles/global.css');

#first-line {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        gap: 20px;
}

#second-line {
    display: grid;
    grid-template-columns: 12% 12% 9% 7% 20% 7% 7% 15.5%;
    gap: 20px;
}

.inputGroup {
    width: auto;
   
}

.entry {
    width: 100%;
    box-sizing: border-box;
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