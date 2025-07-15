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
      path: '/component',
      name: 'component',
      component: () => import('../views/Component.vue'),
    },
    {
      path: '/life-cicle',
      name: 'life-cicle',
      component: () => import('../views/LifeCicle.vue'),
    },
    {
      path: '/form',
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Form.vue'),
    },
    {
      path: '/composable',
      name: 'composable',
      component: () => import('../views/Composable.vue'),
    },
    {
      path: '/router',
      name: 'router',
      component: () => import('../views/Router.vue'),
    },
  ],
})

export default router
