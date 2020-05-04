/*
 * @Author: your name
 * @Date: 2020-05-03 23:06:11
 * @LastEditTime: 2020-05-04 10:24:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\Vue Study\my-vue\webpack.config.js
 */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpakPlugin = require("html-webpack-plugin");
// const VueTemplateCompiler = require("vue-template-compiler")
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
  target: "web",
  mode: "development",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash:8]-main.js",
  },
  resolve: {
    extensions: [".vue", ".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "components"),
      //vue 的路径需要配置，否则会报错
      "vue":"vue/dist/vue.js"
    },
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: [{ loader: "vue-loader" }],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /.css$/,
        use: [
          { loader: "vue-style-loader" },
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {
        test: /.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2048,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: "8080",
    host: "127.0.0.1",
    hot: true,
    noInfo: true,
    open: "Chrome",
    contentBase: path.join(__dirname, "build"),
    overlay: {
      errors: true,
    },
  },

  plugins: [
    new HtmlWebpakPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
      inject: "body",
      showErrors: true,
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
