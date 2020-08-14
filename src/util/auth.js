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

export const NONE_ACCESS = 1;
export const GUEST_ACCESS = 2;
export const EDITOR_ACCESS = 3;
export const ADMIN_ACCESS = 4;
