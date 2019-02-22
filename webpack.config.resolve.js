const path = require('path')

module.exports = {
  extensions: ['.js', '.jsx'],
  modules: [
    path.resolve(__dirname, 'app'),
    'node_modules',
  ],
  alias: {
    '@tools': path.resolve(__dirname, 'tools'),
    '@data': path.resolve(__dirname, 'systems'),
  },
}
