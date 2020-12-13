import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Landing.vue'),
    protected: false,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    protected: false,
  },
  {
    path: '/register',
    name: 'Signup',
    component: () => import('../views/SignUp.vue'),
    protected: false,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    protected: true,
    meta: {
      authorized: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store;
  console.log(user);
  console.log(to, "to is here");
  // console.log(from);
  // console.log(next);
  next();

  // if(!user)
  // const isRegistered = false;
});

export default router;
