import Vue from 'vue'
import axios from 'axios'
import config from './axios.config'
import store from '../store'

/**
 * 深度合并多个对象，返回合并后的新对象
 */
function merge(...objs) {
  let result = {}

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val)
    } else {
      result[key] = val
    }
  }

  for (let obj of objs) {
    for (let key in obj) {
      assignValue(obj[key], key)
    }
  }
  return result
}

/**
 * 判断给定参数是否`null`或空对象`{}`
 */
function isOwnEmpty(obj) {
  for (let name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false // 返回false，不为空对象
    }
  }
  return true // 返回true，为空对象
}

const http = getInstances(config)

function getInstances(conf) {
  let result = {}
  let domains = conf.root || null
  let opts = merge(axios.defaults)
  for (let ky in opts) {
    axios.defaults[ky] = opts[ky]
  }
  result.$http = axios
  if (!isOwnEmpty(domains)) {
    for (let key in domains) {
      key = key.trim()
      if (key !== '' && key !== 'http') { // 忽略以"http"为属性名的节点
        // eslint-disable-next-line
        let instance = axios.create(domains[key])
        // eslint-disable-next-line
        let domainName = `\$${key}`
        console.log(domainName)
        // 为每一个实例添加上axios的静态方法
        instance.all = promises => axios.all(promises)
        instance.spread = cb => axios.spread(cb)
        instance.Cancel = () => axios.Cancel
        instance.CancelToken = () => axios.CancelToken
        instance.isCancel = () => axios.isCancel
        result[domainName] = instance
      }
    }
  }
  return result
}

const HttpPlugin = {
  // eslint-disable-next-line
  install: (Vue) => {
    if (http === null) {
      Vue.prototype.$http = axios
    } else {
      // eslint-disable-next-line
      for (const domainName in http) {
        Vue.prototype[domainName] = http[domainName]
      }
    }
  }
}

/**
 * 请求拦截器
 * @param {Object} config `axios`配置对象
 * @returns {Object|Promise} 返回配置对象本身或者返回一个Promise对象，
 */
function requestInterceptor(conf) {
  // 将post方法的content-type 设置为 application/x-www-form-urlencoded
  if (conf.method === 'post') {
    conf.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    const { data } = conf
    const param = new URLSearchParams()
    // eslint-disable-next-line
    for (let key in data) {
      param.append(key, data[key])
    }
    conf.data = param
  }
  return conf
}

function chinapostRequestInterceptor(conf) {
  if (conf.method === 'post') {
    let userInfo = router.app.$store.state.userInfo || {
      STAFF_ID: '',
      GLOBAL_SESSION_ID: '',
      GLOBAL_SIGN: ''
    }
    conf.headers.post['Content-Type'] = 'application/json'
    conf.headers.post['staffId'] = userInfo.STAFF_ID
    conf.headers.post['session-id'] = userInfo.GLOBAL_SESSION_ID
    conf.headers.post['cnpost'] = store.state.cnpost
    // config.headers.post['session-id'] = '000'
    // config.headers.post['sign'] = '08099'
    conf.headers.post['sign'] = userInfo.GLOBAL_SIGN
  }
  conf.headers.post['Version'] = '1.0.0'
  return conf
}

/**
 * 请求错误处理
 * @param error
 * @returns {Promise} 返回一个Promise对象
 */
function requestError(error) {
  return Promise.reject(error)
}

/**
 * 响应拦截器
 * @param {Object} response `Axios`响应对象
 * @returns {Object|Promise} 返回`Axios`响应对象或Promise对象
 */
function responseInterceptor(response) {
  let ret = response.data

  if (response.config.url.indexOf('login') > -1) {
    store.commit('changeCnpost', response.headers.cnpost)
  }
  if (response.config.url.indexOf('logout') > -1 && response.resultCode === '000000') {
    store.commit('changeCnpost', '')
  }
  response.data.status = response.status
  if (ret.resultCode === '401') { // 说明是登录失效
    router.app.$store.commit(SET_LOGIN_STATE, false)
    router.app.$store.commit(SAVE_LOGIN_INFO, {})
    router.app.$store.commit(SET_NAV, {
      name: '首页',
      type: 'Index',
      iconfont: 'icon-home',
      iconfontAct: 'icon-home_s',
      active: true
    })
    window.localStorage.clear()
    window.sessionStorage.clear()
    router.replace({ name: 'Login' }) // 跳转到login登录页面
  }
  return response.data
}

function responseError(error) {
  return Promise.reject(error)
}

Vue.use(HttpPlugin)

http.$chinapost.interceptors.request.use(chinapostRequestInterceptor, requestError)
http.$chinapost.interceptors.response.use(responseInterceptor, responseError)

http.$testurl.interceptors.request.use(requestInterceptor, requestError)
http.$testurl.interceptors.response.use(responseInterceptor, responseError)

export const $chinapost = http.$chinapost
export const $testurl = http.$testurl

export default http