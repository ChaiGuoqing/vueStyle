import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: 'Home', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: '/slider',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Slider',
        component: () => import('@/views/slider/index'),
        meta: { title: 'Slider', icon: 'link' }
      }
    ]
  },
  {
    path: '/comsmit',
    component: Layout,
    redirect: '/comsmit/child',
    name: '组件通讯',
    meta: { title: '组件通讯', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'child',
        name: '父子组件',
        component: () => import('@/views/comsmit/children/index'),
        meta: { title: '父子组件', icon: 'table' }
      },
      {
        path: 'brother',
        name: '兄弟组件',
        component: () => import('@/views/comsmit/brother/index'),
        meta: { title: '兄弟组件', icon: 'tree' }
      }
      // {
      //   path: 'brother1',
      //   name: '组件A',
      //   component: () => import('@/views/comsmit/brother/brotherA'),
      //   meta: { title: '组件A', icon: 'tree' }
      // },
      // {
      //   path: 'brother2',
      //   name: '组件B',
      //   component: () => import('@/views/comsmit/brother/brotherB'),
      //   meta: { title: '组件B', icon: 'tree' }
      // }
    ]
  },
  {
    path: '/animation',
    component: Layout,
    redirect: '/animation/tableAnimation',
    name: '动画组件',
    meta: { title: '动画组件', icon: 'el-icon-news' },
    children: [
      {
        path: 'tableAnimation',
        name: 'table动画',
        component: () => import('@/views/animation/tableAnimation'),
        meta: { title: 'table动画', icon: 'el-icon-aim' }
      },
      {
        path: 'count',
        name: 'Count动画',
        component: () => import('@/views/animation/count'),
        meta: { title: 'Count动画', icon: 'el-icon-reading' }
      },
      {
        path: 'seamlessScroll',
        name: 'Vue无缝滚动',
        component: () => import('@/views/animation/seamlessScroll'),
        meta: { title: 'Vue无缝滚动', icon: 'el-icon-tickets' }
      }
    ]
  },
  {
    path: '/flex',
    component: Layout,
    redirect: '/flex/attribute',
    name: 'flex组件',
    meta: { title: 'flex组件', icon: 'el-icon-takeaway-box' },
    children: [
      {
        path: 'attribute',
        name: 'Flex',
        component: () => import('@/views/flex/attribute'),
        meta: { title: 'Flex', icon: 'el-icon-bicycle' }
      },
      {
        path: 'layout',
        name: 'Layout',
        component: () => import('@/views/flex/layout'),
        meta: { title: 'Layout', icon: 'el-icon-truck' }
      }
    ]
  },{
    path: '/map',
    component: Layout,
    redirect: '/map/baiduMap',
    name: '地图',
    meta: { title: '地图', icon: 'el-icon-map-location' },
    children: [
      {
        path: 'baiduMap',
        name: 'BaiduMap',
        component: () => import('@/views/map/baiduMap'),
        meta: { title: 'BaiduMap', icon: 'el-icon-place' }
      },
      {
        path: 'gaodeMap',
        name: 'GaodeMap',
        component: () => import('@/views/map/gaodeMap'),
        meta: { title: 'GaodeMap', icon: 'el-icon-location-information' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
