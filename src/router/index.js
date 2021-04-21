import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Clean',
    component: () => import('../views/Clean.vue')
  },
  {
    path: '/product/:name',
    name: 'product',
    component: () => import('../views/Product.vue'),
    children: [
      { path: '/product/:name/:id', component: () => import('../views/Product.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
