import Vue from 'vue'
import Router from 'vue-router'
import View from 'components/layout/View'
import Portal from 'views/Portal'

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
        }
      ]
    }
  ]
})
