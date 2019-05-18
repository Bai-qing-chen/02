import Vue from 'vue'
import Router from 'vue-router'

//自定义组件
import Login from '@/components/login'
import Home from '@/components/home/home'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  var token = sessionStorage.getItem('token')
  if (to.path !== '/login' && !token) {
    return next('/login')
  }
  next()
})
export default router
