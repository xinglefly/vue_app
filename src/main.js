import Vue from 'vue'
import App from './App.vue'
// import { Button, message } from 'ant-design-vue'
import router from './router'
import store from './store/store'
import { $chinapost, $testurl } from 'utils/http'

import 'assets/styles/global.styl'
import 'assets/fonts/iconfont.css'
import 'ant-design-vue/dist/antd.css'
import './ant-design'

// Vue.use(Button)

Vue.config.productionTip = false


Vue.prototype.$chinapost = $chinapost
Vue.prototype.$testurl = $testurl

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
