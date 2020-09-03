import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/laochen',
    name: 'laochen',
    component: () => import(/* webpackChunkName: "about" */ '../views/Laochen.vue')
  },
  {
    //配置动态路由
    path: '/article/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/guard',
    name: 'RoutingGuard',
    component: () => import('../views/RoutingGuard.vue'),
    //对某个路由单独定义守卫, 单独作用, 也可在组件中取定义
    beforeEnter(to, from, next){
      console.log('跳转到 guard 页面之前触发(index.js 中定义)')
      next()
    }
  },
  {
    path: '/noPermission',
    name: 'NoPermission',
    component: () => import('../views/NoPermission.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫, 时间节点, 全局作用
//每次跳转之前触发
router.beforeEach((to, from, next) => {
  console.log('每次跳转之前触发')
  //是否需要继续跳转
  // next()
  console.log(to)
  if (to.path === '/laochen'){
    next('/noPermission')
  }else {
    next()
  }
})
//跳转之后触发, 用的比较少
router.afterEach(((to, from) => {
  console.log('跳转之后触发')
}))

export default router
