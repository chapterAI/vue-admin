import { isArray } from '@/shared/util'
import store from '@/store'

export function checkAuth(roles) {
    if (roles && isArray(roles)) {
        const storeRoles = store.getters['auth/getRoles']
        return storeRoles.some((role) => {
            return roles.includes(role)
        })
    } else {
        throw new Error("v-auth need array type value! e.g. v-auth = ['admin','editor']")
    }
}