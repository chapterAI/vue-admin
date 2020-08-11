import Cookie from 'js-cookie'

const TokenKey = 'admin-token'

export function getToken() {
    return Cookie.get(TokenKey)
}

export function setToken(tokenVal) {
    return Cookie.set(TokenKey,tokenVal)
}

export function removeToken() {
    return Cookie.remove(TokenKey)
}
