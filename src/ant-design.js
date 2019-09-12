import Vue from 'vue'
import {
  Avatar,
  Button,
  Icon,
  Layout,
  Form,
  Input,
  Select
} from 'ant-design-vue'

// 自定义组件
import Page from './components/layout/Page'
import TitleBar from './components/layout/TitleBar'

Vue.use(Avatar)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)

Vue.component(Page.name, Page)
Vue.component(TitleBar.name, TitleBar)
