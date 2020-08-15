import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './routes-constant/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[...constantRoutes]
})

export default router
