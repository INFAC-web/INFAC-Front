<template>
    <div id="invoice-pos">
            <div class="first-container">
                <div class="bussiness-data">
                    <h1>INFAC AL MAYOR S.A.S</h1>
                    <div class="data">
                        <p>NIT: </p>
                        <p>1234-567890-12-3</p>
                    </div>
                    <div class="data">
                        <p>Nombre Comercial:</p>
                        <p>INFAC</p>
                    </div>
                    <div class="data">
                        <p>Teléfono: </p>
                        <p>3153996254</p>
                    </div>
                    <div class="data">
                        <p>Direccion: </p>
                        <p>Universidad Pontificia Bolivariana</p>
                    </div>
                    <p>Tipo de Contribuyente: Persona Jurídica - Responsabilidad Tributaria: IVA - Régimen Fiscal: No aplica – Otros - Actividades
                    Económicas: 4761;4649</p>
                    <p>Resolución y/o Autorización No. 18764044525160 Prefijo IMPA del 1 al 1000 Período 2023-02-16 al 2024-02-16
                    </p>
                </div>
                <div class="info">
                    <h1>FACTURA ELECTRÓNICA DE VENTA</h1>
                    <h3>IMPA1</h3>
                    <div class="data">
                        <p>Emision: </p>
                        <p>{{ dataInvoice.date }}</p>
                    </div>
                    <div class="data">
                        <p>Expedición: </p>
                        <p>{{ dataInvoice.date }}</p>
                    </div>
                    <div class="data">
                        <p>Vencimiento</p>
                        <p>{{ name }}</p>
                    </div>
                </div>
            </div>
        <div class="second-line" style="margin-top: 15px;">
            <div class="client-data">
                <h2 class="client-ttle" >DATOS DEL CLIENTE</h2>
                <div class="contenido">
                    <div class="data">
                        <p>NIT</p>
                        <p>{{ client.docNumber }}</p>
                    </div>
                    <div class="data">
                        <p>Razón Social: </p>
                        <p>{{ client.name }}</p>
                    </div>
                    <div class="data">
                        <p>Nombre Comercial: </p>
                        <p>{{ client.name }}</p>
                    </div>
                    <div class="data">
                        <p>Direccion</p>
                        <p>{{ client.email }}</p>
                    </div>
                    <div class="data" style="margin-top: 10px;">
                            <p>Telefono: </p>
                            <p>{{ client.phoneNumber }}</p>
                        </div>
                        <div class="data">
                            <p>Email: </p>
                            <p>{{ client.email }}</p>
                        </div>
                        <div class="data">
                            <p>Tipo de Contribuyente: Persona Natural - Responsabilidad Tributaria: IVA - Régimen Fiscal: No aplica</p>
                        </div>
                </div>
            </div>
            <div class="conditions client-data" >
                <h2 class="client-ttle">CONDICIONES</h2>
                <div class="contenido">
                    <div class="data">
                        <p>Tipo de operación: </p>
                        <p>Estandar</p>
                    </div>
                    <div class="data">
                        <p>F.V. Referecia: </p>
                        <p></p>
                    </div>
                    <div class="data">
                        <p>F.V. Fecha:</p>
                        <p></p>
                    </div>
                    <div class="data">
                        <p>Formas de pago: </p>
                        <p>{{ dataInvoice.typePay }}</p>
                    </div>
                    <div class="data">
                        <p>Medios de pago: </p>
                        <p>Efectivo</p>
                    </div>
                    <div class="data">
                        <p>Fechas de vencimiento:</p>
                        <p>{{ fecha }}</p>
                    </div>
                    <div class="data">
                        <p>Orden de pedido: </p>
                        <p></p>
                    </div>
                    <div class="data">
                        <p>Orden de pedido Fecha: </p>
                        <p></p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="invoice-data">
            <table>
                <thead>
                    <th style="width: 1%">#</th>
                    <th style="width: 10%">CÓDIGO</th>
                    <th style="width: 30%">DESCRIPCION</th>
                    <th style="width: 8%">CANTIDAD</th>
                    <th style="width: 9%;">PRECIO UNITARIO</th>
                    <th style="width: 8%">DESC.</th>
                    <th style="width: 8%">CARG.</th>
                    <th style="width: 8%">IMPTOS.</th>
                    <th style="width: 8%">SUBTOTAL</th>
                </thead>
                <tbody >
                    <tr v-for="(item, index) in productList" :key="item.id">
                        <td style="width: 1%">{{ index + 1 }}</td>
                        <td style="width: 10%">{{ item.Products_IdProduct }}</td>
                        <td style="width: 30%">{{ item.name }}</td>
                        <td style="width: 8%">{{ item.quantity }}</td>
                        <td style="width: 9%">{{ formatter(item.unityPrice) }}</td>
                        <td style="width: 8%">$0,00</td>
                        <td style="width: 8%">$0,00</td>
                        <td style="width: 8%">{{ formatter(item.iva/100 * item.totalPrice) }}</td>
                        <td style="width: 8%">{{ formatter(item.totalPrice + (item.totalPrice * (item.iva / 100))) }}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div class="html2pdf__page-break"></div>
        <div class="first-container">
                <div class="bussiness-data">
                    <h1>INFAC AL MAYOR S.A.S</h1>
                    <div class="data">
                        <p>NIT: </p>
                        <p>1234-567890-12-3</p>
                    </div>
                    <div class="data">
                        <p>Nombre Comercial:</p>
                        <p>INFAC</p>
                    </div>
                    <div class="data">
                        <p>Teléfono: </p>
                        <p>3153996254</p>
                    </div>
                    <div class="data">
                        <p>Direccion: </p>
                        <p>Universidad Pontificia Bolivariana</p>
                    </div>
                    <p>Tipo de Contribuyente: Persona Jurídica - Responsabilidad Tributaria: IVA - Régimen Fiscal: No aplica – Otros - Actividades
                    Económicas: 4761;4649</p>
                    <p>Resolución y/o Autorización No. 18764044525160 Prefijo IMPA del 1 al 1000 Período 2023-02-16 al 2024-02-16
                    </p>
                </div>
                <div class="info">
                    <h1>FACTURA ELECTRÓNICA DE VENTA</h1>
                    <h3>IMPA1</h3>
                    <div class="data">
                        <p>Emision: </p>
                        <p>{{ dataInvoice.date }}</p>
                    </div>
                    <div class="data">
                        <p>Expedición: </p>
                        <p>{{ dataInvoice.date }}</p>
                    </div>
                    <div class="data">
                        <p>Vencimiento</p>
                        <p>{{ name }}</p>
                    </div>
                </div>
            </div>
            <div class="second-line" style="margin-top: 15px;">
            
        </div>
        <div class="qr-data">
           <div class="qr"> 
                <img src="./qrcode.png" alt="">
                <p>CUFE: d739177b3c4623e50b5e9e30601fa1304fa475aa0888cd91d27324edc375df40c4c6664925bf06bd07e2d2d18adbded4</p>
           </div>
           <div class="total">
                <div class="data">
                    <p>Total items: </p>
                    <p>{{ name }}</p>
                </div>
                <div class="data">
                    <p>Divisa: </p>
                    <p>Peso colombiano (COP)</p>
                </div>
                <div class="data">
                    <p>Tasa de cambio: </p>
                    <p>$0,00</p>
                </div>
                <div class="data">
                    <p>Subtotal </p>
                    <p>{{ dataInvoice.totalValue }}</p>
                </div> <div class="data">
                    <p>Total items: </p>
                    <p>{{ name }}</p>
                </div>
                <div class="data">
                    <p>Descuento Detalle: </p>
                    <p>$0,00</p>
                </div>
                <div class="data">
                    <p>Recargo detalle: </p>
                    <p>{{ name }}</p>
                </div>
                <div class="data">
                    <p>Total Bruto Factura: </p>
                    <p>{{ dataInvoice.iva }}</p>
                </div>

           </div>
        </div>
    </div>
</template>

<script setup>

    import html2pdf from 'html2pdf.js'
    import { getByID } from '@/model/clients.model.js';
    import { getInvoiceFromApi } from '@/model/invoices.model.js';
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

    const clientEntity = {
        name: '',
        docNumber: ''
    }
    
    const opt = {
        margin:       0.2,
        filename:     'exportTest.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const dataInvoice = ref(dataEntity);
    const client = ref(clientEntity);
    const productList = ref(dataEntity)

    const generatePDF = async (idInvoice) => {
        const element = document.getElementById('invoice-pos');

        const thisInvoice = await getInvoiceFromApi(idInvoice)
        dataInvoice.value = thisInvoice.invoice;
        productList.value = thisInvoice.products;

        client.value = await getByID(dataInvoice.value.Clients_idClient);

        html2pdf().from(element).set(opt).toPdf().get('pdf').then(function (pdf) {
            window.open(pdf.output('bloburl'), '_blank');
        });
        //.save();
    }

    const formatter = (price) => {
        let moneyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
         });

         return moneyFormat.format(price)
    }

    defineExpose({
        generatePDF
    })
</script>

<style scoped>
    .qr img {
        height: 120px;
    }

    .qr-data{
        display: grid;
        grid-template-columns: 1fr 0.3fr;
        gap: 20px;
    }

    .first-container{
        display: grid;
        grid-template-columns: 1fr 0.4fr;
        gap: 10px;
    }

    .second-line {
        display: grid;
        grid-template-columns: 1fr 0.5fr;
        gap: 10px;
    }

    .data {
        display: flex;
    }

    .data p {
        margin-right: 3px;
    }

    h1 {
        margin: 0;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
    }

    h2 {
        margin: 0;
        font-weight: normal;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
    }

    h3 {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
    }

    span, p {
        padding: 0px;
        margin: 0px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
    }

    .client-ttle{
        background:#e7e7e7;
    }

    .client-data {
        border: 1px solid #e7e7e7;
    }
    
    .contenido {
        padding: 7px 7px ;
    }

    table {
        margin-top: 20px;
    }

    thead {
        border-bottom: 1px solid #E7E7E7;
        width: 100%;
    }

    th {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: #505050;
        font-size: 12px;
        height: 10px;
        padding: 0;
        margin: 0;
    }

    tr {
            margin: 0;
            padding: 0;
            border-bottom: 1px solid #E7E7E7;

    }

    /* Aplicar un estilo a las filas pares */
        tr:nth-child(even) {
        background-color: #f5f5f5; /* Color de fondo para filas pares */
        }

        /* Aplicar un estilo a las filas impares (opcional) */
        tr:nth-child(odd) {
        background-color: #ffffff; /* Color de fondo para filas impares */
        }

    td {
        border-top: none;
        border-bottom: none;
        padding-bottom: 5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
    }

    th, td {
        
        text-align: left; /* Alinea todas las celdas a la izquierda */
    }
</style>