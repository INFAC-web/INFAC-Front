import html2pdf from 'html2pdf.js'
import posInvoice from '../views/components/billing-formats/posInvoice.vue'

class PDFgenerator {
    constructor (invoiceInfo) {
        this.info = invoiceInfo;
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