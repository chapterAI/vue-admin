import { isArray } from '@/shared/util'
import adminRoutes from '@/router/routes/routes-admin'
import constantRoutes from '@/router/routes/routes-constant'
import editorRoutes from '@/router/routes/routes-editor'
import guestRoutes from '@/router/routes/routes-guest'
import { ACCESS_AUTH } from '@/shared/constant'
import { default as router, resetRouter } from '@/router/index'

const RoutesMap = {
    [ACCESS_AUTH.GUEST_ACCESS]: guestRoutes,
    [ACCESS_AUTH.EDITOR_ACCESS]: adminRoutes,
    [ACCESS_AUTH.ADMIN_ACCESS]: editorRoutes
}

export const routesState = {
    routes: undefined
}

export const routesGetters = {
    getRoutes(state, getters) {
        return state.routes
    }
}

export const routesMutations = {
    setRoutes(state, newRoutes) {
        state.routes = newRoutes
    },
    updateRoutesByLevel(state, level) {
        if (RoutesMap[level]) {
            console.log(1)
            /** 动态添加路由 */
            resetRouter()
            router.addRoutes(RoutesMap[level])
            /** 修改routes，由于router内部的路由表拿不到 */
            state.routes = isArray(state.routes) 
                ? constantRoutes.concat(RoutesMap[level])
                : constantRoutes
        }
    }
}

export const routesActions = {

}
