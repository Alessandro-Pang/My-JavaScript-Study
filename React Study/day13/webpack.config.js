/*
 * @Author: your name
 * @Date: 2020-05-05 08:58:58
 * @LastEditTime: 2020-05-05 14:25:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\webpack.config.js
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  target:"web",
  mode:"development",
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[hash:8]-bundle.js"
  },
  resolve:{
    extensions:[".js",".json"],
    alias:{
      "@":path.join(__dirname,"src")
    }
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:"babel-loader"
      }
    ]
  },
  devServer:{
    port:8001,
    host:"127.0.0.1",
    open:"Chrome",
    hot:true,
    noInfo:false,
    contentBase:path.join(__dirname,"dist"),
    overlay:{
      errors:true
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.join(__dirname,"public/index.html"),
      filename:"index.html",
      inject:"body",
      showErrors:true
    })
  ]
}

module.exports = config;