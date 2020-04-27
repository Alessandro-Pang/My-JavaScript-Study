/*
 * @Author: your name
 * @Date: 2020-04-27 08:29:04
 * @LastEditTime: 2020-04-27 20:24:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day08\webpack-react\webpack.config.js
 */
const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
    entry: "./src/entry.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/, // jsx/js文件的正则
            exclude: /node_modules/, // 排除 node_modules 文件夹
            use: {
                // loader 是 babel
                loader: 'babel-loader',
                options: {
                    // babel 转义的配置选项
                    babelrc: false,
                    presets: [
                        // 添加 preset-react
                        require.resolve('@babel/preset-react'), [require.resolve('@babel/preset-env'), { modules: false }]
                    ],
                    cacheDirectory: true
                }
            }
        },{
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          }]
    },
    devServer: {
        port:3000,
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        open:true
    },
    // ...
    plugins: [
        new HtmlWebPackPlugin({
            template: 'view/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
}

module.exports = config;