import { getUserInfo } from '@/ajax/request/login'
import { ROLES_MAP } from '@/shared/constant'
import { isArray } from '@/shared/util'


export const rolesState = {
    roles: [],
}

export const rolesGetters = {
    getRoles(state, getters) {
        return state.roles
    }
}

export const rolesMutations = {
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
    }
}

export const rolesActions = {

}
