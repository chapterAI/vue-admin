import Request from '@/util/adminRequest'
import { setAnimation, clearAnimation } from '@/util/adminRequestAnimation'

/* 获取token */
export function loginAndGetToken(username) {
    return Request({
        url: '/login',
        method: 'get',
        params: {
            username:username
        }
    }).then((data) => {
        data = data.data && data.data[0]
        let token = data && data.token
        return token
    })
}

/* 获取用户信息 */
export function getUserInfo(token) {
    return Request({
        url: '/getUserInfo',
        method: 'get',
        params: { 
            token 
        }
    }).then((data) => {
        data = data.data && data.data[0]
        let userInfo = {}
        userInfo.auth = data && data.access
        return userInfo
    })
}