/*
 * @Author: your name
 * @Date: 2020-05-03 23:06:58
 * @LastEditTime: 2020-05-04 10:26:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\Vue Study\my-vue\main.js
 */
// vue 是小写,类名需要大写
import Vue from 'vue';
import App from './App'

new Vue({
  el:"#app",
  components: { App },
  template:"<App />"
})