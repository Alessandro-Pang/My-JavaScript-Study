/*
 * @Author: your name
 * @Date: 2020-05-04 16:27:02
 * @LastEditTime: 2020-05-04 18:52:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\webpack.config.js
 */
const path = require('path') ;
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  target:"web",
  mode:"development",
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[hash:8]-budule.js"
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
        loader:"babel-loader"
      }
    ]
  },

  devServer:{
    port:8080,
    host:"127.0.0.1",
    noInfo:true,
    open:"Chrome",
    hot:true,
    contentBase:path.join(__dirname,"dist"),
    overlay:{
      errors:true
    },
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

module.exports=config;