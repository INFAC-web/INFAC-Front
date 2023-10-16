import { toast } from 'vue3-toastify';

class ErrorHandler {
  constructor() {
    this.options = {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    };
  }

  show(error) {
    const code = error.status;

    if(!code) {
      toast.warning(error.message, {
        ...this.options,
        //data: message,
      });

    } else {
      const message = error.data.details;

      switch (code) {
        case 404: 
          toast.error(message, {
            ...this.options,
          });
        break;
        case 500:
          toast.error(message, {
            ...this.options,
            theme: toast.THEME.COLORED
          });
        break;
      }
    }
    
  }

}

export default ErrorHandler;





