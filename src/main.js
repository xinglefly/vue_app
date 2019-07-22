import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { $chinapost, $testurl } from 'utils/http'

import 'assets/styles/global.styl'
import 'assets/fonts/iconfont.css'

Vue.config.productionTip = false


Vue.prototype.$chinapost = $chinapost
Vue.prototype.$testurl = $testurl

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
