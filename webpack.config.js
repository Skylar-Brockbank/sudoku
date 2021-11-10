const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devtool: 'eval-sorurce-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'JustPleaseWork',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  }
};