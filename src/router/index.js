import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('../views/Basic.vue'),
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/Practice.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/Computed.vue'),
    },
    {
      path: '/watcher',
      name: 'watcher',
      component: () => import('../views/Watcher.vue'),
    },
    {
      path: '/form',
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Form.vue'),
    },
  ],
})

export default router
