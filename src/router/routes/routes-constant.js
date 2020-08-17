import BasicLayout from '@/layout/basic'
import { checkAuth } from '@/router/hooks'

export default [
    {
        path: '/',
        name: 'Layout',
        component: BasicLayout,
        beforeEnter: checkAuth,
        children: [
            {
                path: 'index',
                component: () => import('@/views/About.vue'),
                meta: { title: 'about', icon: '' }
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue')
    }
]