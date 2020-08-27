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
        name: 'DashBoard',
        component: BasicLayout,
        redirect: '/index',
        meta: { title: 'DashBoard', icon: 'el-icon-sunrise-1' },
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('@/views/About.vue'),
                meta: { title: 'Index', icon: '' }
            },
            {
                path: 'guide',
                name: 'Guide',
                component: () => import('@/views/guide'),
                meta: { title: 'Guide', icon: '' }
            },
        ]
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: BasicLayout,
        redirect: '/Menu/index1',
        meta: { title: 'Menu', icon: 'el-icon-s-operation' },
        children: [
            {
                path: 'index1',
                name: 'Index1',
                redirect: '/Menu/index1/index1-2',
                component: () => import('@/views/About.vue'),
                meta: { title: 'Index1', icon: '' },
                children: [
                    {
                        path: 'index1-1',
                        name: 'Index1-1',
                        redirect: '/Menu/index1/index1-1/index1-1-1',
                        component: BasicLayout,
                        meta: { title: 'Index1-1', icon: '' },
                        children: [
                            {
                                path: 'index1-1-1',
                                name: 'Index1-1-1',
                                component: () => import('@/views/About.vue'),
                                meta: { title: 'Index1-1-1', icon: '' }
                            }
                        ]
                    },
                    {
                        path: 'index1-2',
                        name: 'Index1-2',
                        component: () => import('@/views/About.vue'),
                        meta: { title: 'Index1-2', icon: '' },
                    },
                ]
            }
        ]
    },
    {
        path: '/icons',
        name: 'Icons',
        redirect: '/icons/icon-show',
        component: BasicLayout,
        meta: { title: 'Icons', icon: '', noMenu: true },
        children: [
            {
                path: 'icon-show',
                name: 'IconShow',
                component: () => import('@/views/icons/index.vue'),
                meta: { title: 'IconShow', icon: 'el-icon-goods' }               
            }
        ]
    },
    {
        path: '/components',
        name: 'Components',
        redirect: '/components/js-editor',
        component: BasicLayout,
        meta: { title: 'Components', icon: 'el-icon-s-grid' },
        children: [
            {
                path: 'js-editor',
                name: 'JsEditor',
                component: () => import('@/views/js-editor/JsEditor.vue'),
                meta: { title: 'JsEditor', icon: '' }
            },
            {
                path: 'json-editor',
                name: 'JsonEditor',
                component: () => import('@/views/json-editor/index.vue'),
                meta: { title: 'JsonEditor', icon: '' }               
            },
            {
                path: 'markdown-editor',
                name: 'MarkdownEditor',
                component: () => import('@/views/markdown-editor/index.vue'),
                meta: { title: 'MarkdownEditor', icon: '' }               
            },
            {
                path: 'show-3d',
                name: 'Show 3D',
                component: () => import('@/views/showing3d/showing.vue'),
                meta: { title: 'Show 3D', icon: '' }
            },
            {
                path: 'setting',
                name: 'Setting',
                component: () => import('@/views/setting/setting.vue'),
                meta: { title: 'Setting', icon: '' }
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
        path: '/clipboard-view',
        name: 'ClipboardView',
        redirect: '/clipboard-view/clipboard',
        component: BasicLayout,
        meta: { title: 'ClipboardView', icon: 'el-icon-picture-outline-round',noMenu: true },
        children: [
            {
                path: 'clipboard',
                name: 'ClipBoard',
                component: () => import('@/views/clipboard'),
                meta: { title: 'ClipBoard', icon: 'el-icon-document-copy' }               
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/views/login/Login.vue'),
        meta: { title: 'Login', icon: '' }
    }
]