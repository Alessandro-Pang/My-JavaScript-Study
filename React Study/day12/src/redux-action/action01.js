/*
 * @Author: your name
 * @Date: 2020-05-04 19:06:57
 * @LastEditTime: 2020-05-04 19:31:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\redux-acrtion\action01.js
 */
import { createStore } from "redux";
import {counter} from "@/reducers";

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

let hr = document.createElement("hr");
document.body.appendChild(hr);
let str = document.createElement("strong");
document.body.appendChild(str);

let stores = "";
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => {
  stores += "subscribe 订阅更新："+store.getState()+"<br/>";
  console.log(store.getState());
  str.innerHTML=stores;
});

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: "INCREMENT" });
// 1
store.dispatch({ type: "INCREMENT" });
// 2
store.dispatch({ type: "DECREMENT" });
// 1
