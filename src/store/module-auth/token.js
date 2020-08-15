import {
    getToken,
    setToken,
    removeToken
} from '@/shared/token'


export const tokenState = {
    token:getToken()
}

export const tokenGetters = {
    getToken(state,getters){
        return state.token
    }
}

export const tokenMutations = {
    setToken(state,newToken){
        setToken(newToken)
        state.token = newToken
    },
    removeToken(state){
        removeToken()
        state.token = undefined
    }
}

export const tokenActions = {

}
