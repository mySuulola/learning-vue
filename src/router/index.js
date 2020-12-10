import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Landing.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Signup',
    component: () => import('../views/SignUp.vue'),
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
    meta: {
      authorized: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store;
  console.log(user);
  // console.log(to);
  // console.log(from);
  // console.log(next);
  next();

  // if(!user)
  // const isRegistered = false;
});

export default router;
