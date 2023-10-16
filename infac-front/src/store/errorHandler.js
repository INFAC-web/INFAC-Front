import { toast } from 'vue3-toastify';

class ErrorHandler {
  constructor() {
    this.options = {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.INFO,
      autoClose: 3000,
    };
  }

  show(code, message) {
    toast(`Código de error: ${code}`, {
      ...this.options,
      data: message,
    });
  }

}

export default ErrorHandler;





