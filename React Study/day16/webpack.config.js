/*
 * @Author: your name
 * @Date: 2020-05-08 22:13:47
 * @LastEditTime: 2020-05-13 08:06:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day16\webpack.conifg.js
 */
// const webpack = require("webpack")
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
// console.log(webpack)//.env

const config = {
  target: "web",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash:8]-bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@": path.join(__dirname, "src/components"),
      src: path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        // include:path.resolve(__dirname,'~antd/dist/antd.css'),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "[name]-[hash:8]-[ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
      inject: "body",
      showErrors: true,
    }),
  ],
};

module.exports = function (env) {
  if(env === "development"){
    config.watchOptions = {
      aggregateTimeout: 1000, // in ms
      // 将多个更改聚合到单个重构建(rebuild)
      poll: true,
      poll: 500, // 间隔单位 ms
      // 启用轮询观察模式
      // 必须用在不通知更改的文件系统中
      // 即 nfs shares（译者注：Network FileSystem，最大的功能就是可以透過網路，讓不同的機器、不同的作業系統、可以彼此分享個別的檔案 ( share file )）
    }

    config.devServer= {
      port: 8080,
      //设置 0.0.0.0 可以使其他设备访问
      host: "127.0.0.1",
      open: "Chrome",
      openPage: "MenuManger",
      hot: true,
      noInfo: false,
      contentBase: path.join(__dirname, "dist"),
      overlay: {
        warnings: true,
        errors: true,
      },
      compress: true, // enable gzip compression
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    }
  }
  config.mode = env === "development" ? "development" : "production";
  config.devtool = env === "developement" ? "eval" : "source-map";

  return config;
};
