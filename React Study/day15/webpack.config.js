/*
 * @Author: your name
 * @Date: 2020-05-06 08:22:55
 * @LastEditTime: 2020-05-08 12:41:41
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
    //静态资源路径
    publicPath: "/",
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
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { 
            loader: "css-loader",
            options:{
              modules: {
                /*
                [path]:文件所在路径
                [name]:css文件名
                [local]:导出模块名
                [hash:base64]: 
                  base64是由 数字、大小写英文字符与下划线组成
                  hash 是由 数字和小写英文字符组成
                */
                localIdentName:"pcy-ui-[name]-[local]-[hash:6]"
              },
            }
          },
          /**
           * 当前webpack已经不支持通过 option
           *  使用 autoprefixer 添加 browser 版本支持
           *
           * 需要将 browser 直接手动添加到package.json 中
           */
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        loader: "url-loader",
        options: {
          limit: "2048",
          name: "[hash:8].[name].[ext]",
        },
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
    //路由接口回退
    historyApiFallback: true,
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
