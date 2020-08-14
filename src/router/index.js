import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Store from '@/store/index'
import {
  NONE_ACCESS,
  GUEST_ACCESS,
  EDITOR_ACCESS,
  ADMIN_ACCESS
} from '@/util/auth'
import {
  getUserInfo
} from '@/api/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (Store.getters['auth/getToken']) {
        getUserInfo(Store.getters['auth/getToken'])
          .then((userInfo) => {
            if (userInfo && userInfo.auth) {
              Store.commit('auth/setAuth', userInfo.auth)
              switch (userInfo.auth) {
                case ADMIN_ACCESS:
                case GUEST_ACCESS:
                case EDITOR_ACCESS:
                  next()
                  break
                default:
                  next({ name: 'Login' })
              }
            } else {
              next({ name: 'Login' })
            }
          })
      } else {
        next({ name: 'Login' })
      }
    },
    children: [{
      path: 'index',
      component: () => import('@/views/About.vue')
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
