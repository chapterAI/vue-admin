import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './routes/routes-constant'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router
