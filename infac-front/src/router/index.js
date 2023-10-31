import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js'; // Importa las rutas desde tu archivo de rutas
import { useUserCounterStore } from '../store/userStore.js';

import ErrorHandler from '@/store/errorHandler.js'; 
const errorHandler = new ErrorHandler();

const router = createRouter({
    history: createWebHistory(),
    routes // Utiliza las rutas importadas
  });  

router.beforeEach( async (to, from, next) => {
  const requireAuth = to.meta.auth;
  const rol = to.meta.roles
  const userStore = useUserCounterStore();

  let nextPage = false;

  console.log("ROL")
  console.log(rol)

  await userStore.refreshToken();

  if(requireAuth){
    if(userStore.token){

      if(rol){
        console.log("Validando rol")
        console.log(userStore.rol)
        if(rol.includes(userStore.rol)){
          return next();
        } else {
          errorHandler.show({status: 500, data: {details: 'No tiene permisos para acceder a esta ruta'}})
          return next(from.path);
        }
      }

      return next();
    }
    return next('/login');
  }

  next();
});

export default router;