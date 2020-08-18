import { ACCESS_AUTH } from '@/shared/constant'
import { getUserInfo } from '@/ajax/request/login'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Store from '@/store/index'

/** nprogress config */
NProgress.configure({ showSpinner: false })

/** 白名单,这些页面不需要登录也可以访问 */
const whiteList = ['/login']

export function beforeEachHooks(to, from, next) {
    
    NProgress.start()

    if (Store.getters['auth/hasLogin']) {
        if (to.path === '/login') {
            next(false)
            NProgress.done()
        } else {
            next()
        }
    } else {
        if (Store.getters['auth/getToken']) {
            Store.dispatch('auth/updateUserData')
                .then(() => {
                    Store.commit('auth/updateRoutesByRoles')
                    next({ ...to, replace: true })
                })
        } else {
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next('/login')
                NProgress.done()
            }
        }
    }
}

export function afterEachHooks() {
    NProgress.done()
}