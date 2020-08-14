import Axios from 'axios';
import config from '@/config'
import { getToken } from './auth'
import { requestAnimation, responseAnimation } from '@/util/adminRequestAnimation'

const service = new Axios.create({
    baseURL: config.ADMIN_BACKEND_ROOT.main,
    timeout: 5000
})


/**
 * 数据拦截器处理|header处理--token
 */
service.interceptors.request.use(
    config => {
        //虽然请求头里会有，但是没有后端处理，是个摆设
        const token = getToken()
        if (token) {
            config.headers['token'] = token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

/**
 * 动画请求拦截器
 */
service.interceptors.request.use(
    config => {
        requestAnimation && requestAnimation(config)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 动画响应拦截器
 */
service.interceptors.response.use(
    data => {
        // console.log(data)
        responseAnimation && responseAnimation(data)
        return data
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 数据响应拦截器
 */
service.interceptors.response.use(
    data => {
        // console.log(data)
        if (data.code === 500 || data.code === 302) {
            //全局处理
        }
        return data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service

