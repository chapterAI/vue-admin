import BasicLayout from '@/layout/basic'

/********************************************************************************************************** 
 * 参数说明：
 * hidden                   表明该路由是否会在导航栏中展示出来
 * meta:{
 *   title:'Index'          是指该路径组件的标题名,用于展示在导航栏和面包屑上 
 *   icon:'el-icon'         是指该路径展示时所用的icon图标
 *   roles:['admin']        是指页面的访问权限，权限有admin，editor等
 *   noMenu:true            设置为true时，表明当前路径不作为目录展示（只能用在单个子路由的情况下，否则不起效）
 * }
 * 
 **********************************************************************************************************
*/

export default [
    {
        path: '/',
        name: 'Layout',
        component: BasicLayout,
        redirect: '/index',
        meta: { title: 'Layout', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/1',
        name: 'Layout1',
        component: BasicLayout,
        redirect: '/1/index1',
        meta: { title: 'Layout1', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index1',
                name: 'Index1',
                redirect: '/1/index1/index1-2',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index1', icon: 'el-icon-help' },
                children: [
                    {
                        path: 'index1-1',
                        name: 'Index1-1',
                        redirect: '/1/index1/index1-1/index1-1-1',
                        component: BasicLayout,
                        meta: { title: 'Index1-1', icon: 'el-icon-picture-outline-round' },
                        children: [
                            {
                                path: 'index1-1-1',
                                name: 'Index1-1-1',
                                component: () => import('@/views/About.vue'),
                                meta: { title: 'Index1-1-1', icon: 'el-icon-help' }
                            }
                        ]
                    },
                    {
                        path: 'index1-2',
                        name: 'Index1-2',
                        component: () => import('@/views/About.vue'),
                        meta: { title: 'index1-2', icon: 'el-icon-help' },
                    },
                ]
            }
        ]
    },
    {
        path: '/2',
        name: 'Layout2',
        redirect: '/2/index2',
        component: BasicLayout,
        meta: { title: 'Layout2', icon: 'el-icon-picture-outline-round', noMenu: true },
        children: [
            {
                path: 'index2',
                name: 'Index2',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/3',
        name: 'Layout3',
        redirect: '/3/index3',
        component: BasicLayout,
        meta: { title: 'Layout3', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index3',
                name: 'Index3',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/4',
        name: 'Layout4',
        redirect: '/4/index4',
        component: BasicLayout,
        meta: { title: 'Layout4', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index4',
                name: 'Index4',
                component: () => import('@/views/About.vue'),
                meta: { title: 'index', icon: 'el-icon-help' }
            }
        ]
    },
    {
        path: '/5',
        name: 'Layout5',
        redirect: '/5/index5',
        component: BasicLayout,
        meta: { title: 'Layout5', icon: 'el-icon-picture-outline-round' },
        children: [
            {
                path: 'index5',
                name: 'Index5',
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
        hidden: true,
        component: () => import('@/views/login/Login.vue'),
        meta: { title: 'Login', icon: 'el-icon-setting' }
    }
]