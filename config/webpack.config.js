//
//           _
//           \`*-.
//            )  _`-.
//           .  : `. .
//           : _   '  \
//           ; *` _.   `*-._
//           `-.-'          `-.
//             ;       `       `.
//             :.       .        \
//             . \  .   :   .-'   .
//             '  `+.;  ;  '      :
//             :  '  |    ;       ;-.
//             ; '   : :`-:     _.`* ;
//    [bug] .*' /  .*' ; .*`- +'  `*'
//          `*-*   `*-*  `*-*'
//
// Created by kk on 17/4/28.

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSCSS = new ExtractTextPlugin({filename: 'static/css/[name].[contenthash:8].css'})
const path = require('path')
const fs = require('fs')
const env = require('./env')[process.env.NODE_ENV]
const {define_env} = require('./utils')

module.exports = {
  devtool: '#source-map',

  entry: {
    index: [
      require.resolve('./polyfills.js'),
      path.resolve('./', 'src/index.js'),
    ]
  },

  output: {
    path: path.resolve('./build'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: env.PUBLIC_PATH
  },

  module: {
    rules: [{
      test: /\.(jpg|png|svg|woff2|woff|md)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'url-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          limit: 1000,
        }
      }],
    }, {
      test: /\.(bin)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        }
      }],
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|config)/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }],
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: extractSCSS.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: true,
              modules: true,
              localIdentName: '[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            }
          }
        ]
      }),
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: './public/index.html',
      chunksSortMode: ({names: [a]}, {names: [b]}) => {
        const orders = ['manifest', 'vendor', 'index']
        const diff = orders.indexOf(a) - orders.indexOf(b)
        if (diff > 0) {
          return 1
        } else if (diff < 0) {
          return -1
        }
        return 0
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    extractSCSS,

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['index'],
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),

    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest', //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
      minChunks: Infinity
    }),

    new webpack.DefinePlugin(define_env(env)),

    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath: `${env.PUBLIC_PATH}/`,
      writeToFileEmit: true,
    }),

    new CopyWebpackPlugin([{
      from: './res',
      to: 'res'
    }], {
      ignore: ['.DS_Store']
    }),
  ],

  devServer: {
    contentBase: false,
    compress: true,
    port: 2333,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: {
      index: `${env.PUBLIC_PATH}index.html`,
      verbose: false, // 如路由出现问题时，可以打开 verbose 进行调试。
    },
    proxy: {
      '/api': {target: 'http://localhost:10000/'},
    },
  },

  node: {
    Buffer: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}