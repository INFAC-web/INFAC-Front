const routes = [
  {
    path: '/login', name:'index', component: () => import('../views/pages/LoginPage.vue')
  },
  {
    path: '/changepwd', name:'changepwd', component: () => import('../views/pages/changePasswd.vue')
  },
  {
    path: '/dashboard', name:'dashboard', 
    component: () => import('../views/pages/dashBoardPage.vue'),
    meta: {
      auth: true,
      roles: ['administrador']
    }
  },
  {
    path: '/inventory', name:'inventory', 
    component: () => import('../views/pages/inventoryPage.vue'),
    meta: {
      auth: true,
      roles: ['administrador', 'bodega']
    }
  },
  {
    path: '/billing', name:'billing', component: () => import('../views/pages/billingPage.vue'),
    meta: {
      auth: true,
      roles: ['administrador', 'empleado']
    }
  },
  {
    path: '/users', name:'users', component: () => import('../views/pages/usersPage.vue'),
    meta: {
      auth: true,
      roles: ['administrador']
    }
  },
  {
    path: '/notebook', 
    name:'notebook', 
    component: () => import('@/views/pages/notebookPage.vue'),
    children: [
      {
        path:'history',
        component: () => import('@/views/components/notebook-component/historyComponent.vue'),
      },
      {
        path:'providers',
        component: () => import('@/views/components/notebook-component/providersComponent.vue')
      },
      {
        path:'clients',
        component: () => import('@/views/components/notebook-component/clientsComponent.vue')
      },
      {
        path:'wallet',
        component: () => import('@/views/components/notebook-component/historyComponent.vue')
      }

    ], 
    meta: {
      auth: true,
    }
  },
];

export default routes;