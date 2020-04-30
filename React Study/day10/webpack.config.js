/*
 * @Author: your name
 * @Date: 2020-04-29 08:14:38
 * @LastEditTime: 2020-04-30 00:37:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day10\webpack.config.js
 */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
/**
 * webpack4.x 之后
 *  给出了一个约定大于配置的概念
 *    即：开发人员根据约定将输入输出的路径与约定一致
 *      entry:defualt --> './src/index.js'
 *      output:'./dist/mian.js'
 */
const config = {
  /**
   * production 环境下会压缩代码
   * development 环境下不会压缩代码，会将打包后的代码显示出来
   * 默认none,测试后发现默认会压缩代码?
   */
  mode: "development", // "production" | "development" | "none"
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[hash:8]-mian.js"
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_moudles/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // babel 转义的配置选项
              babelrc: true,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },

  devServer: {
    host: "127.0.0.1",
    port: 3000,
    open: "Chrome",
    hot: true,
    noInfo: true,
    contentBase: path.join(__dirname, "dist"),
    overlay: {
      /* 输出异常信息 */
      error: true,
    },
  },

  plugins: [
    new HtmlWebPackPlugin({
      title:"Git Hub Hot Project",
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};

module.exports = config;
