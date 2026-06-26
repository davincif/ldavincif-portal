import HomeView from '@/views/homeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:catchAll(.*)*',
      redirect: '/',
    },
  ],
});

export default router;

// /:catchAll(.*)*
// /:pathMatch(.*)*
