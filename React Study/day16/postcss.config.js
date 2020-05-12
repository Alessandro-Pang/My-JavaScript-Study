/*
 * @Author: your name
 * @Date: 2020-05-10 13:20:15
 * @LastEditTime: 2020-05-10 13:48:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day16\postcss.config.js
 */
const precss = require("precss");
const autoprefixer = require("autoprefixer")

module.exports={
  plugins:[
    precss(),
    autoprefixer()
  ]
}
