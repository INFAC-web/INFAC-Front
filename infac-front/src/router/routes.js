const routes = [
  {
    path: '/login', name:'index', component: () => import('../views/pages/LoginPage.vue')
  },
  {
    path: '/inventory', name:'inventory', 
    component: () => import('../views/pages/inventoryPage.vue'),
    meta: {
      auth: true,
    }
  },
  {
    path: '/billing', name:'billing', component: () => import('../views/pages/billingPage.vue')
  },
  {
    path: '/users', name:'users', component: () => import('../views/pages/usersPage.vue')
  },
  {
    path: '/notebook', 
    name:'notebook', 
    component: () => import('@/views/pages/notebookPage.vue'),
    children: [
      {
        path:'history',
        component: () => import('@/views/components/notebook-component/historyComponent.vue')
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

    ]
  },
];

export default routes;