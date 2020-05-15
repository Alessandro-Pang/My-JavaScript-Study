/*
 * @Author: your name
 * @Date: 2020-05-14 10:48:17
 * @LastEditTime: 2020-05-14 10:50:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\postcss.config.js
 */
const autoprefixer = require("autoprefixer");
const precss = require("precss");

export default {
  plugins:[
    autoprefixer(),
    precss()
  ]
}