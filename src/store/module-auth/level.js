import { getUserInfo } from '@/ajax/request/login'
import { ACCESS_AUTH } from '@/shared/constant'

const levelMap = {
    'none': ACCESS_AUTH.NONE_ACCESS,
    'guest': ACCESS_AUTH.GUEST_ACCESS,
    'editor': ACCESS_AUTH.EDITOR_ACCESS,
    'admin': ACCESS_AUTH.ADMIN_ACCESS
}

export const levelState = {
    level: ACCESS_AUTH.NONE_ACCESS,
    dirty: true
}

export const levelGetters = {
    getLevel(state, getters) {
        return state.level
    },
    needUpdate(state){
        return state.dirty
    }
}

export const levelMutations = {
    setLevel(state, auth) {
        if (auth && levelMap[auth]) {
            console.log(levelMap[auth])
            state.level = levelMap[auth]
        }
    },
    hasDirty(state){
        state.dirty = true
    },
    hasUpdated(state){
        state.dirty = false
    }
}

export const levelActions = {
    updateLevel({ state, commit, getters }, newLevel) {
        const token = getters['getToken']
        if (token) {
            return getUserInfo(token)
                .then(userInfo => {
                    userInfo && userInfo.auth
                        ? commit('setLevel', userInfo.auth)
                        : undefined
                })
        }
    }
}
