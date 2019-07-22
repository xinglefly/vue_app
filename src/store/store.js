import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cnpost: '',
    prefixUrl: 'http://192.168.248.16:8080/',
    userInfo: {
    },
    focusNav: 'Index',
    navs: [
      {
        name: '首页',
        type: 'Index',
        iconfont: 'icon-home',
        iconfontAct: 'icon-home_s',
        active: true
      },
      {
        name: 'TOP客户',
        type: 'TopClient',
        iconfont: 'icon-kehu',
        iconfontAct: 'icon-kehu_s',
        active: false
      },
      {
        name: '预警客户',
        type: 'WarningClient',
        iconfont: 'icon-chanpin1',
        iconfontAct: 'icon-chanpin_s',
        active: false
      },
      {
        name: '流失客户',
        type: 'LeaveClient',
        iconfont: 'icon-wode1',
        iconfontAct: 'icon-Shape',
        active: false
      }
    ]
  },
  mutations
})
