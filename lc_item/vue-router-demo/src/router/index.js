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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/RoutingGuard.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫, 时间节点
//每次跳转之前触发
router.beforeEach((to, from, next) => {
  console.log('每次跳转之前触发')
})

export default router
