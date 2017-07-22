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
//

const webpack = require('webpack')
const base = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

base.plugins.unshift(new webpack.optimize.UglifyJsPlugin({sourceMap: true, beautify: false}))
base.plugins.unshift(new BundleAnalyzerPlugin())
module.exports = base