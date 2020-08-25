import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/login/Login.vue'], resolve),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/index',
      name: 'index',
      mata: {
        requireAuth: true
      },
      component: resolve => require(['../components/index/index'], resolve)
    }
  ]
})
