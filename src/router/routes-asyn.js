import BasicLayout from '@/layout/basic/index.vue'
import Demo1 from '@/views/demo/demo1.vue'
import Demo2 from '@/views/demo/demo2.vue'

export default [
    {
        name: 'Admin',
        path: '/admin',
        component: BasicLayout,
        meta: { 
            title:'Admin',
            icon:'el-icon-bell'
        },
        children: [
            {
                name: 'Admin-admin',
                path: 'demo1',
                component: Demo1,
                meta: {
                    roles: ['admin'],
                    title:'Admin-admin',
                    icon:'el-icon-s-marketing'
                }
            },
            {
                name: 'Admin-editor',
                path: 'demo2',
                component: Demo2,
                meta: {
                    roles: ['editor'],
                    title:'Admin-editor',
                    icon:'el-icon-s-shop'
                }
            }
        ]
    },
    {
        name: 'NotFound',
        path: '*',
        hidden:true,
        component: () => import('@/views/notFound/404.vue')
    }
]