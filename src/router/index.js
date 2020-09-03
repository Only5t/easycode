import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/login/login'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../components/index/index'], resolve),
      meta: {
        title: 'index',
        requireAuth: true
      },
      children: [
        {
          path: '/1-1',
          name: '1-1',
          component: resolve => require(['../components/user/user'], resolve),
          meta: {
            title: 'user',
            requireAuth: true
          }
        }
      ]
    }
  ]
})
