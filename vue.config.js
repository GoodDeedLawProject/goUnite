var path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        stylevars: path.resolve(__dirname, 'src/assets/stylevars.scss')
      }
    }
  }
}