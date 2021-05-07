import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 主页路由
    path: '/',
    name: 'Home',
    component: Home,
    // 子组件1
    children: [{
      path: '/childOne',
      name: 'ChildOne',
      component: () => import('../components/ChildOne.vue')
    },
    // 子组件2
    {
      path: '/childTwo',
      name: 'ChildTwo',
      component: () => import('../components/ChildTwo.vue')
    },]
  },
  // about页面路由
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
