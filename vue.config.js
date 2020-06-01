const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '慕课网-程序员的梦工厂'
    }
  },
  lintOnSave: false,
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('components', resolve('src/components')).set('images', resolve('src/images')).set('styles', resolve('src/styles')).set('pages', resolve('src/pages')).end()
  }
}