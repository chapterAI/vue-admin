import { ACCESS_AUTH } from '@/shared/constant'
import { getUserInfo } from '@/ajax/request/login'
import Store from '@/store/index'

/** beforeEnter钩子，判断主页是否需要跳转至登录页|做路由处理，token处理 */
export function checkAuth(to, from, next) {
    const NONE_ACCESS = ACCESS_AUTH.NONE_ACCESS
    if (!Store.getters['auth/needUpdate']) {
        next()
        return
    }
    if (Store.getters['auth/getToken']) {
        Store.dispatch('auth/updateLevel')
            .then(() => {
                if (Store.getters['auth/getLevel'] !== NONE_ACCESS) {
                    const level = Store.getters['auth/getLevel']
                    Store.commit('auth/hasUpdated')
                    Store.commit('auth/setRoutes', level)
                    Store.commit('auth/updateRoutesByLevel', level)
                    next()
                } else {
                    next({ name: 'Login' })
                }
            })
    } else {
        next({ name: 'Login' })
    }
}