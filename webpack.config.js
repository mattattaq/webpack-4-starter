const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css-extract');
const uglifyJS = require('./webpack/js-uglify');
const images = require('./webpack/file-loader');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

const common = {
    entry: {
      'index': PATHS.src + '/main.js',
    },
    output: {
      path: PATHS.dist,
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Webpack app',
        template: './src/index.html'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
};

const productionConfig = {
  mode: 'production'
};
const developmentConfig = {
  mode: 'development'
};


module.exports = function(env){
  if(env === 'production'){
    return merge([
      common,
      productionConfig,
      extractCSS(),
      uglifyJS(),
      images()
    ])
  }
  if(env === 'development'){
    return merge([
      common,
      developmentConfig,
      devserver(),
      sass(),
      css(),
      images()
    ])
  }
};