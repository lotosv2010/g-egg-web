import { createRouter, createWebHashHistory } from 'vue-router';
import { useGlobalStore } from '@/stores';

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/layouts/AppLayout.vue'), // 注意这里要带上 文件后缀.vue
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'), // 注意这里要带上 文件后缀.vue
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/pages/profile/index.vue'),
      },
    ],
  },
  {
    path: '/profile',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'Profile',
        meta: { requiresAuth: true },
        component: () => import('@/pages/profile/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    meta: { requiresAuth: false },
    component: () => import('@/pages/404/index.vue'),
  },
  // 匹配所有路径 vue2使用* vue3使用/:pathMatch(.*)或/:catchAll(.*)
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

// 路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // store
  const store = useGlobalStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store?.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
