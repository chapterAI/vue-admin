import BasicLayout from '@/layout/basic'
import { checkAuth } from '@/router/hooks'

export default [
    {
        name: 'Layout',
        path: '/admin',
        component: BasicLayout,
        beforeEnter: checkAuth,
        chilren:
            [
                {
                    name: 'demo',
                    path: 'demo',
                    component: () => import('@/views/demo/demo.vue')
                }
            ]
    }
]