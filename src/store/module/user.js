import { getToken, setToken, removeToken } from '@/shared/token'
import { loginAndGetToken, getUserInfo } from '@/ajax/request/login'
import { ROLES_MAP } from '@/shared/constant'
import { isArray } from '@/shared/util'
import constantRoutes from '@/router/routes-constant'
import asynRoutes from '@/router/routes-asyn'
import { addRoutes, resetRouter } from '@/router'

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

export default {
    namespaced:true,
    state: {
        login: false,
        token: getToken(),
        roles: [],
        routes: constantRoutes
    },
    getters:{
        hasLogin(state) {
            return state.login
        },
        getToken(state, getters) {
            return state.token
        },
        getRoles(state, getters) {
            return state.roles
        },
        getRoutes(state, getters) {
            return state.routes
        }
    },
    mutations:{
        updateLogin(state, login) {
            state.login = login
        },
        setToken(state, newToken) {
            setToken(newToken)
            state.token = newToken
        },
        removeToken(state) {
            removeToken()
            state.token = undefined
        },
        addRoles(state, newRoles) {
            newRoles.forEach((value, index, self) => {
                if (ROLES_MAP[value]) {
                    self[index] = ROLES_MAP[value]
                } else {
                    console.warn('unexcept role:', value)
                }
            })
            state.roles = state.roles.concat(newRoles)
        },
        resetRoles(state) {
            state.roles = []
        },
        updateRoles(state, newRoles) {
            if (newRoles) {
                isArray(newRoles)
                    ? this.commit('auth/addRoles', newRoles)
                    : this.commit('auth/addRoles', [newRoles])
            } else {
                return false
            }
        },
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
    },
    actions: {
        login({ state, commit, getters }, loginObj) {
            return new Promise((resolve, reject) => {
                loginAndGetToken(loginObj)
                    .then((data) => {
                        const token = data && data.token
                        if (token) {
                            commit('setToken', token)
                            resolve(true)
                        } else {
                            resolve(false)
                        }
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },
        logout({ state, commit, getters }) {
            commit('removeToken')
            commit('resetRoles')
            commit('updateLogin', false)
            commit('resetRoutes')
        },
        updateUserData({ state, commit, getters, dispatch }, tokenObj) {
            return new Promise((resolve, reject) => {
                const token = getters['getToken']
                if (token) {
                    getUserInfo({ token })
                        .then((data) => {
                            if (data && data.auth) {
                                commit('updateRoles', data.auth)
                                commit('updateLogin', true)
                                resolve(true)
                            } else {
                                resolve(false)
                            }
                        })
                } else {
                    resolve(false)
                }
            })
        }
    }
}