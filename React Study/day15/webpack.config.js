/*
 * @Author: your name
 * @Date: 2020-05-06 08:22:55
 * @LastEditTime: 2020-05-06 08:54:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\webpack.config.js
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  target: "web",
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash:8]-bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "src/components"),
      src: path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: "url-loader",
        options: { 
          limit: "2048",
          name:'[name].[ext]'
        } 
      },
    ],
  },
  devServer: {
    port: 8080,
    host: "127.0.0.1",
    hot: true,
    open: "Chrome",
    noInfo: false,
    contentBase: path.join(__dirname, "dist"),
    overlay: {
      errors: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
      showErrors: true,
      inject: "body",
    }),
  ],
};

module.exports = config;
