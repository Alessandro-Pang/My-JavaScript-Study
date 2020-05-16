/*
 * @Author: your name
 * @Date: 2020-05-14 10:26:12
 * @LastEditTime: 2020-05-16 18:53:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//入口文件默认从 src 下读取index文件
const config = {
  // entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash:8]-bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
    alias: {
      "@": path.join(__dirname, "src", "components"),
      src: path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          babelrc: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // exclude:/node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: "url-loader",
        options: {
          limit: "1024",
          name: "[path]-[hash-8]-[name].[ext]",
        },
      },
    ],
  },

  devServer: {
    host: "127.0.0.1",
    port: "8080",
    open: "Chrome",
    hot: true,
    noInfo: false,
    contentBase: path.resolve(__dirname, "dist"),
    overlay: {
      error: true,
      warn: true,
    },
    //路由接口回退
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "index.html",
      inject: "body",
      showErrors: true,
    }),
  ],
};

module.exports = config;
