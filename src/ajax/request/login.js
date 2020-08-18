import Request from '@/ajax/base/axios-admin'
import { setAnimation, clearAnimation } from '@/ajax/base/animation-manager'

/* 获取token */
export function loginAndGetToken(loginObj) {

    const params = formDataBeforeLogin(loginObj)

    return Request({
        url: '/login',
        method: 'get',
        params: params
    }).then((data) => {

        return formDataAfterLogin(data)
    })
}

function formDataBeforeLogin(loginObj) {
    const username = loginObj && loginObj.username
        ? loginObj.username
        : undefined
    return {
        username
    }
}

function formDataAfterLogin(data) {
    data = data.data && data.data[0]
    return {
        token : data && data.token
    }
}

/* 获取用户信息 */
export function getUserInfo(tokenObj) {

    const params = formDataBeforeUserInfo(tokenObj)

    return Request({
        url: '/getUserInfo',
        method: 'get',
        params: params
    }).then((data) => {

        return formDataAfterUserInfo(data)
    })
}

function formDataBeforeUserInfo(tokenObj) {
    const token = tokenObj && tokenObj.token
        ? tokenObj.token
        : undefined
    return {
        token
    }
}

function formDataAfterUserInfo(data) {
    data = data.data && data.data[0]
    let userInfo = {}
    userInfo.auth = data && data.access
    return userInfo
}