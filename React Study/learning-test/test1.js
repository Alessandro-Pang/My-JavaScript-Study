/*
 * @Author: your name
 * @Date: 2020-05-15 08:17:54
 * @LastEditTime: 2020-05-15 13:16:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\learning-test\test1.js
 */
function sum(a, b) {
  return a + b;
}

//模块导出使用 Node 导出方式 
module.exports=sum;

// 如果使用ES6导出方法，则需要安装babel插件
// transform-es2015-modules-commonjs