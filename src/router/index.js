import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Landing.vue'),
    meta: {
      protected: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      protected: false,
    },
  },
  {
    path: '/register',
    name: 'Signup',
    component: () => import('../views/SignUp.vue'),
    meta: {
      protected: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      protected: false,
    },
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      protected: true,
    },
  },
  {
    path: '/star-war',
    name: 'Star war',
    component: () => import('../views/StarWar.vue'),
    meta: {
      protected: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../views/NotFound.vue'),
    meta: {
      protected: 'all',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store;
  if (!user.state.User.user && to.meta.protected === true) {
    router.push('login');
    return;
  }
  if (user.state.User.user && to.meta.protected === false) {
    router.push('home');
    return;
  }
  next();
});

export default router;
