import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './routes-constant'
import { beforeEachHooks,afterEachHooks } from './hooks'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: constantRoutes,
  // scrollBehavior: () => ({ y: 0 }),
})

const router = createRouter()

/** 挂载全局钩子 */
router.beforeEach(beforeEachHooks)
router.afterEach(afterEachHooks)

/** 解决push重定向路由报错 */
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export const addRoutes = router.addRoutes.bind(router)

export default router
