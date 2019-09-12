// 静态配置对象，此对象在 /static/conf/app-conf.js 内配置

// eslint-disable-next-line
const appConf = window.APP_CONF || {
}
window.APP_CONFIG = {
  prefixUrl: 'http://localhost:8081/appserver/api/common/getattachment?filekey='
}
/**
 * 服务调用对象配置，默认的配置信息
 * @type {Object}
 */
const conf = {
  root: {
    base: {
      baseURL: 'http://localhost:8888/',
      timeout: 60000
    },
    testurl: {
      baseURL: '',
      timeout: 60000
    }
  }
}

// 将优先的静态配置覆盖本配置,覆盖的内容为请求baseurl
function overrideConf() {
  const urls = appConf.baseURL
  const { root } = conf
  if (urls) {
    // eslint-disable-next-line
    for (let key in urls) {
      root[key] = urls[key]
    }
  }
}

// 调整配置优先级
overrideConf()

export default conf
