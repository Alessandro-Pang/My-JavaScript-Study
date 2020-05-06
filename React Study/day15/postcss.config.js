/*
 * @Author: your name
 * @Date: 2020-05-06 21:38:43
 * @LastEditTime: 2020-05-07 00:29:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\postcss.config.js
 */
const precss = require("precss")
const autoprefixer = require("autoprefixer")
module.exports = {
  plugins:[
    precss(),
    autoprefixer()
  ]
}