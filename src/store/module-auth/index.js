import { tokenState, tokenGetters, tokenMutations, tokenActions } from './token'
import { rolesState, rolesGetters, rolesMutations, rolesActions } from './roles'
import { routesState, routesGetters, routesMutations, routesActions } from './routes'
import { LoginState, LoginGetters, LoginMutations, LoginActions } from './login'
import { loginAndGetToken, getUserInfo } from "@/ajax/request/login";

export default {
    namespaced: true,
    state: {
        ...tokenState,
        ...rolesState,
        ...routesState,
        ...LoginState
    },
    getters: {
        ...tokenGetters,
        ...rolesGetters,
        ...routesGetters,
        ...LoginGetters
    },
    mutations: {
        ...tokenMutations,
        ...rolesMutations,
        ...routesMutations,
        ...LoginMutations,
    },
    actions: {
        ...tokenActions,
        ...rolesActions,
        ...routesActions,
        ...LoginActions,
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
    },
    modules: {

    }
}