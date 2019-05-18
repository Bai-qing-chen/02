import Vue from 'vue'
import Router from 'vue-router'

//自定义组件
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
})
