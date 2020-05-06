/*
 * @Author: your name
 * @Date: 2020-04-30 19:58:05
 * @LastEditTime: 2020-05-05 21:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day11\app\webpack.config.js
 */
const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  target:"web",
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash:8]-bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "src/components"),
      "@src":path.join(__dirname, "src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
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
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options:{
              limit:2048
            }
          },
        ],
      },
    ],
  },
  devServer: {
    host: "127.0.0.1",
    port: "3000",
    hot: true,
    open: "Chrome",
    noInfo: true,
    contentBase: path.join(__dirname, "dist"),
    overlay: {
      error: true,
    },
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebPackPlugin({
      titel: "reactStudy",
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
      inject: "body",
      showErrors:true
    }),
  ],
};

module.exports = config;
