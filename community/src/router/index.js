import Vue from 'vue'
import Router from 'vue-router'

import View from '@/views/View'
import Index from '@/views/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/view',
      name: 'View',
      component: View
    }
  ]
})
