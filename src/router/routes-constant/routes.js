import Home from '@/views/Home.vue'
import { checkAuth } from './hooks'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: checkAuth,
        children: [{
            path: 'index',
            component: () => import('@/views/About.vue')
        }]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    }
]