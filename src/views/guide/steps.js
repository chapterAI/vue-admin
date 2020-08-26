export default [
    {
        element: '#sideBar-container',
        popover: {
            title: 'SideBar',
            description: '根据权限 动态显示路由信息',
            position: 'right'
        }        
    },
    {
        element: '#nav-bar',
        popover: {
          title: 'NavBar',
          description: '动态跟踪路由变化，根据sideBar显示信息，点击（若为新路由）则会跳转',
          position: 'bottom'
        }
    },
    {
        element: '#tag-views',
        popover: {
          title: 'TagViews',
          description: '类似标签页展示打开的路由，使用keepalive，切换页面路由数据保活，关闭标签数据重置',
          position: 'bottom'
        }
    },
    {
        element: '#main-app',
        popover: {
          title: 'MainApp',
          description: '内部具体页面的信息',
          position: 'top'
        }
    },
]
