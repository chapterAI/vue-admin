import { isArray } from '@/shared/util'
import adminRoutes from '@/router/routes-asyn'
import constantRoutes from '@/router/routes-constant'
import asynRoutes from '@/router/routes-asyn'
import { addRoutes, resetRouter } from '@/router/index'

function hasRoles(route, roles) {
    if (route && route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return true
    }
}


function filterRoutes(routes, roles) {
    const res = []
    if (roles.includes('admin')) {
        return routes
    } else {
        routes.forEach((route) => {
            const tmp = { ...route }
            if (hasRoles(tmp, roles)) {
                if (tmp.children) {
                    tmp.children = filterRoutes(tmp.children, roles)
                }
                res.push(tmp)
            }
        })
    }
    return res
}

export const routesState = {
    routes: constantRoutes
}

export const routesGetters = {
    getRoutes(state, getters) {
        return state.routes
    }
}

export const routesMutations = {
    addRoutes(state, newRoutes) {
        state.routes = state.routes.concat(newRoutes)
    },
    resetRoutes(state) {
        state.routes = constantRoutes
    },
    updateRoutesByRoles(state) {
        /** 修改routes，由于router内部的路由表拿不到 */
        this.commit('auth/resetRoutes')
        const roles = this.getters['auth/getRoles']
        const newRoutes = filterRoutes(asynRoutes, roles)
        this.commit('auth/addRoutes', newRoutes)
        /** 动态添加路由 */
        resetRouter()
        addRoutes(newRoutes)

        console.log(state.routes)
    }
}

export const routesActions = {

}
