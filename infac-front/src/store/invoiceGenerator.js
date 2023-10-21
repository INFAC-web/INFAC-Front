import html2pdf from 'html2pdf.js'
import posInvoice from '../views/components/billing-formats/posInvoice.vue'

class PDFgenerator {
    constructor (invoiceInfo, products) {
        this.infoInvoice = invoiceInfo;
        this.products = products; 
    }

    POS () {
        try {
            console.log(posInvoice)
            html2pdf(posInvoice);
        } catch (error) {
            console.log(error)
        }
       
    }
}

export default PDFgenerator;