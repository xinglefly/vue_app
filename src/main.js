import Vue from 'vue'
import { $base } from 'utils/http'
import App from './App.vue'
// import { Button, message } from 'ant-design-vue'
import router from './router'
import store from './store/store'

import 'assets/styles/global.styl'
import 'assets/fonts/iconfont.css'
import 'ant-design-vue/dist/antd.css'
import './ant-design'

// Vue.use(Button)

Vue.config.productionTip = false


Vue.prototype.$base = $base

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
