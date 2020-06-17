/*
 * @Author: your name
 * @Date: 2020-06-16 13:38:41
 * @LastEditTime: 2020-06-16 13:38:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\webpack.config.js
 */ 
const { HotModuleReplacementPlugin } = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash:8].bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
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
        options: {
          babelrc: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: "1024",
          name: "[path]-[hash-8]-[name]-[ext]",
        },
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2|otf)$/,
        loader: "file-loader",
      },
    ],
  },

  devServer: {
    host: "127.0.0.1",
    port: "9009",
    open: "Chrome",
    hot: true,
    noInfo: false,
    contentBase: path.join(__dirname, "dist"),
    overlay: {
      error: true,
      wran: true,
    },
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
      inject: "body",
      showError: true,
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = config;