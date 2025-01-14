import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/guest',
      name: 'guest',
      component: () => import('../views/guest/List.vue'),
    },
  ],
})

export default router
