/*
 * @Author: your name
 * @Date: 2020-05-04 19:14:58
 * @LastEditTime: 2020-05-04 21:21:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\redux-action\action02.js
 */
import { createStore } from "redux";
import { counter } from "@/reducers";

//通过 redux 的 createStore 创建 存储(?)状态
let store = createStore(counter);
//query 方法
const byID = (id) => document.getElementById(id);

//输出初始状态值
byID("val").innerText = store.getState();
//输出改变后的状态值
byID("btn").onclick = function () {
  store.dispatch({ type: "INCREMENT" });
  byID("val").innerText = store.getState();
};

byID("btn2").onclick = function () {
  store.dispatch({ type: "DECREMENT" });
  byID("val").innerText = store.getState();
};
