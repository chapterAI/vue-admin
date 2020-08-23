import { registAnimation } from '@/ajax/base/animation-manager'
import { Message } from 'element-ui'

registAnimation(
    'demo',
    (config) => {
        console.log(config)
    },
    (data) => {
        console.log(data)
    }
)

registAnimation(
    'LoginSuccess',
    (config) => {

    },
    (data) => {
        const status = data.status;
        const username = data.data && data.data[0] && data.data[0].username
        if (status == 200) {
            if (username) {
                Message({
                    message: '欢迎回来: ' + username,
                    type: 'success',
                    showClose: true
                });
            }else{
                Message({
                    message: '登陆失败',
                    type: 'error',
                    showClose: true
                });
            }
        } else {
            Message({
                message: '服务器错误',
                type: 'error',
                showClose: true
            });
        }
    }
)