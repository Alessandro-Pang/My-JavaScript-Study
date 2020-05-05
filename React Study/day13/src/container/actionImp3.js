/*
 * @Author: your name
 * @Date: 2020-05-05 14:29:32
 * @LastEditTime: 2020-05-05 16:57:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\src\container\aticnImp3.js
 */
import { createStore } from "redux";
import todo from "@/reducers/expand";
import { add_todo, remove_todo } from "@/action";

let store = createStore(todo);

let query = (id) => document.getElementById(id);
let del = document.getElementsByClassName("del");

let arr = [];
let str = "";
query("add").onclick = function () {
  let val = query("inp").value;
  store.dispatch(add_todo(val));
  str = store.getState().todos.join("<span class='del'></span><br>");
  str += "<span class='del'></span><br>";
  query("store").innerHTML = str;
};

query("remove").onclick=function(){
  for(let i=0;i<del.length;i++){
    del[i].onclick=function(){
      console.log(1)
      store.dispatch(remove_todo(i));
      str = store.getState().todos.join("<span class='del'></span><br>");
      str += "<span class='del'></span><br>";
      query("store").innerHTML = str;
    }
  }
}
/**
  Store 就是把它们联系到一起的对象。Store 有以下职责：

    维持应用的 state；
    提供 getState() 方法获取 state；
    提供 dispatch(action) 方法更新 state；
    通过 subscribe(listener) 注册监听器;
    通过 subscribe(listener) 返回的函数注销监听器。

-----------------------------------------------------------

    (1)创建 store 
        let store = createStore(reducers);
      
    (2)创建 state 订阅
 ----> let unsubscribe = subscribe(()=>{
 |         (3)获取 state 状态
 |         console.log(store.getState())
 |       })
 |   
 |   (4)更新 state 状态
 |       dispatch(action);
 |   
 |   (5)注销 state 订阅
 ------ unsubscribe();
 
 */