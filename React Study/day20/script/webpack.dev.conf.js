/*
 * @Author: zi.yang
 * @Date: 2020-06-16 13:38:41
 * @LastEditTime: 2020-07-02 23:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\script\webpack.dev.conf.js
 */
const { HotModuleReplacementPlugin } = require("webpack")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname,"../dist"),
    filename: "[hash:8].bundle.js",
    publicPath: "/" ,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      src: path.join(__dirname,"../src"),
      "@": path.join(__dirname,"../src/components"),
      common: path.join(__dirname,"../src/common"),
      static: path.join(__dirname,"../src/static"),
      container: path.join(__dirname,"../src/containers"),
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
        test: /\.(jpe?g|png|gif|cur)$/,
        loader: "url-loader",
        options: {
          limit: "1024",
          name: "[hash:8]-[name].[ext]",
        },
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2|otf)$/,
        loader: "file-loader",
      },
    ],
  },

  devServer: {
    host: "0.0.0.0",
    port: "9009",
    open: "Chrome",
    hot: true,
    noInfo: false,
    contentBase: path.join(__dirname,"../dist"),
    overlay: {
      error: true,
      wran: true,
    },
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,"../public/index.html"),
      favicon: path.join(__dirname,"../public/favicon.ico"),
      filename: "index.html",
      inject: "body",
      showError: true,
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
