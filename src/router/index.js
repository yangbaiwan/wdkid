import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'onePage',
    component: () => import('@/views/homePage.vue'),
    children: [
      {
        path: 'onePage',
        component: () => import('@/views/shouye.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
