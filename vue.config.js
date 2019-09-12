const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  publicPath: '',
  assetsDir: '',
  
  css: {
    loaderOptions: {
      stylus: {
        use: [
          poststylus([
            pxtorem({
              rootValue: 100,
              propWhiteList: [],
              minPixelValue: 1,
              unitPrecision: 2
            }),
            'autoprefixer'
          ])
        ],
        import: [
          // resolve('./src/assets/theme.custom')
        ]
      }
    }
  },
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
      '/base': {
        target: 'http://192.168.248.16:8080',
        changeOrigin: true
      },
      '/testurl': {
        target: 'https://www.easy-mock.com',
        changeOrigin: true
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}
