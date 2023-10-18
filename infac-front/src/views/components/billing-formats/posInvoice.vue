<template>
    <div id="invoice-pos">
        <div class="bussiness-data">
            <div class="data">
                <span>NIT</span>
                <span>{{ nit }}</span>
            </div>
            <div class="data">
                <span>Nombre Comercial</span>
                <span>{{ name }}</span>
            </div>
            <div class="data">
                <span>Teléfono</span>
                <span>{{ name }}</span>
            </div>
            <div class="data">
                <span>E-mail</span>
                <span>{{ name }}</span>
            </div>
        </div>
        <div class="client-data">
            <h2>DATOS DEL CLIENTE</h2>
            <div class="data-c">
                <span>NIT</span>
                <span>{{ nit }}</span>
            </div>
            <div class="data-c">
                <span>RAZON SOCIAL</span>
                <span>{{ name }}</span>
            </div>
            <div class="data-c">
                <span>TELEFONO</span>
                <span>{{ phoneNumber }}</span>
            </div>
            <div class="data-c">
                <span>E-mail</span>
                <span>{{ email }}</span>
            </div>
        </div>
        <div class="invoice-data">
            <table>
                <thead>
                    <th>#</th>
                    <th>CÓDIGO</th>
                    <th>DESCRIPCION</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO UNITARIO</th>
                    <th>IMPUESTOS</th>
                    <th>SUBTOTAL</th>

                </thead>
                <tbody>
                    <tr v-for="item in dataInvoice.productList" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.Products_idProduct }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.unityPrice }}</td>
                        <td>{{ item.iva }}</td>
                        <td>{{ item.totalValue }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import html2pdf from 'html2pdf.js'
    import { ref } from 'vue'

    const dataEntity = {
        Clients_idClient: '',
        invoiceType: '',
        dicount: '',
        total: '',
        itemsQuant: '',
        productList : '',
        Users_idUser: '',
        typePay: ''
    }

    const opt = {
        margin:       0.5,
        filename:     'exportTest.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const dataInvoice = ref(dataEntity);

    const generatePDF = (data) => {
        const element = document.getElementById('invoice-pos');
        dataInvoice.value = data;
        html2pdf().set(opt).from(element).save();
    }

    defineExpose({
        generatePDF
    })
</script>

<style scoped>
</style>