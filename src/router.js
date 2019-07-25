import Vue from 'vue'
import Router from 'vue-router'
import View from 'components/layout/View'
import Portal from 'views/Portal'
import mine from 'views/mine/routers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: View,
      children: [
        {
          path: '',
          name: 'portal',
          component: Portal
        },
        ...mine
      ]
    }
  ]
})
