import BasicLayout from '@/layout/basic'

export default [
    {
        path: '/',
        name: 'Layout',
        component: BasicLayout,
        meta: { title: 'Layout', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/1',
        name: 'Layout1',
        component: BasicLayout,
        meta: { title: 'Layout', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index1',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/2',
        name: 'Layout2',
        component: BasicLayout,
        meta: { title: 'Layout2', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index2',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/3',
        name: 'Layout3',
        component: BasicLayout,
        meta: { title: 'Layout', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index3',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/4',
        name: 'Layout4',
        component: BasicLayout,
        meta: { title: 'Layout', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index4',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/5',
        name: 'Layout5',
        component: BasicLayout,
        meta: { title: 'Layout', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index5',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: { title: 'About', icon: 'el-icon-video-camera' }
    },
    {
        path: '/login',
        name: 'Login',
        hidden:true,
        component: () => import('@/views/login/Login.vue'),
        meta: { title: 'Login', icon: 'el-icon-setting' }
    }
]