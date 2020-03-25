var path = require('path');
var webpack = require('webpack');
var setDefaultBrowser = require('set-default-browser');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/theme/main.scss',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.scss$/,
        loader: "style!css!autoprefixer!scss"
      },
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};
 
setDefaultBrowser("firefox");
