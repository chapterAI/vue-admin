import {
    NONE_ACCESS,
    GUEST_ACCESS,
    EDITOR_ACCESS,
    ADMIN_ACCESS,
    getToken,
    setToken
} from '@/util/auth'

export default {
    namespaced:true,
    state: {
        auth: NONE_ACCESS,
        token: getToken()
    },
    getters: {
        getAuth(state, getters) {
            return state.auth
        },
        getToken(state, getters){
            return state.token
        }
    },
    mutations: {
        setAuth(state, auth_level) {
            state.auth = auth_level
        },
        setToken(state, newToken){
            setToken(newToken)
            state.token = newToken
        }
    },
    actions: {

    },
    modules: {
    }
}