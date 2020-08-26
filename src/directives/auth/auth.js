import { isArray } from '@/shared/util'
import store from '@/store'

function checkAuth(el, binding) {
    const { value } = binding;
    if (value && isArray(value)) {
        if (value.length > 0) {
            const roles = store.getters['auth/getRoles']
            const hasAuth = roles.some(role => {
                return value.includes(role)
            })
            if(!hasAuth){
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    } else {
        throw new Error("v-auth need array type value! e.g. v-auth = ['admin','editor']")
    }
}

export default {
    inserted: checkAuth,
    update: checkAuth
}