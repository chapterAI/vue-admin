import adminRequest from '@/util/adminRequest'

export function loginAndGetToken(loginObj) {
    return adminRequest.request({
        url: '/login',
        method: 'get',
        params: loginObj
    }).then((data) => {
        let token = data.data && data.data[0] && data.data[0].token
        return token
    })
}
