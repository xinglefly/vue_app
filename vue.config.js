const { resolve } = require('path')

module.exports = {
  publicPath: '',
  assetsDir: '',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('constants', resolve('src/constants'))
      .set('utils', resolve('src/utils'))
      .set('mixins', resolve('src/mixins'))
      .set('views', resolve('src/views'))
  },
  devServer: {
    proxy: {
      '/appserver': {
        target: 'http://192.168.248.16:8080',
        changeOrigin: true
      },
      '/testurl': {
        target: 'https://www.easy-mock.com',
        changeOrigin: true
      }
    }
  }
}