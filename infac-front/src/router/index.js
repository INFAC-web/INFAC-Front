import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js'; // Importa las rutas desde tu archivo de rutas
import { useUserCounterStore } from '../store/userStore.js';

const router = createRouter({
    history: createWebHistory(),
    routes // Utiliza las rutas importadas
  });  

router.beforeEach( async (to, from, next) => {
  const requireAuth = to.meta.auth;
  const userStore = useUserCounterStore();

  await userStore.refreshToken();

  if(requireAuth){
    if(userStore.token){
      return next();
    }
    return next('/login');
  }

  next();
});

export default router;