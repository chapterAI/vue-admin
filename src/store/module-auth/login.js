/** 判断是否登录 */
export const LoginState = {
    login: false
}

export const LoginGetters = {
    hasLogin(state) {
        return state.login
    }
}

export const LoginMutations = {
    updateLogin(state, login) {
        state.login = login
    }
}

export const LoginActions = {

}
