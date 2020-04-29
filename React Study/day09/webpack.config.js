/*
 * @Author: your name
 * @Date: 2020-04-28 08:19:07
 * @LastEditTime: 2020-04-28 13:00:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day09\webpack.config.js
 */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//如果想启动 webpack-dev-server 必须安装 @babel/preset-env
const config = {
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash:8]bundle.js",
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\jsx?$/,
        exclude: /node_moudles/,
        use: {
          loader: "babel-loader",
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve("@babel/preset-react"),
              [require.resolve("@babel/preset-env"), { modules: false }],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use:[
          {
            loader:"url-loader"
          }
        ]
      }
    ],
  },

  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist"),
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body", //script 标签插入位置
    }),
  ],
};

module.exports = config;
