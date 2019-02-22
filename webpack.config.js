import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import resolve from './webpack.config.resolve'

module.exports = {
  entry: path.join(__dirname, 'app', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve,
  devServer: {
    contentBase: path.join(__dirname, 'app'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|styl)$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
    }),
  ],
}
