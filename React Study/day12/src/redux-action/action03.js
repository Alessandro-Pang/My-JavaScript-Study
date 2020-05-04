/*
 * @Author: your name
 * @Date: 2020-05-04 19:58:58
 * @LastEditTime: 2020-05-04 23:31:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\redux-action\action03.js
 */
import { createStore } from "redux";
import { add_todo,remove_todo } from "@/action";
import { todo } from "@/reducers";
import Common from '@/Common';
                                               
let store = createStore(todo);
const c = new Common();

let hr = c.create("hr");
let todos = c.create("input");
let valid = c.create("input");
valid.type="text"

let btn = c.create("button")
btn.innerText = "add Todo"
let btn2 = c.create("button")
btn2.innerText = "remove Todo"

let strong = c.create("strong");
let br = c.create("br");

let div = c.create("div")
c.append([hr,todos,valid,btn,btn2,br,strong,hr,div]);

store.subscribe(() => {
  //每次订阅更新，先清空内容
  let val = "";
  //获取内容
  let a = store.getState();
  a.forEach(element => {
    if(element){
      val += "订阅更新："+element.todo+"<br/>";
    }
  });
  div.innerHTML = val
});

btn.onclick = function(){
  let val = todos.value;
  let id = valid.value;
  store.dispatch(add_todo(val,id))
  strong.innerHTML=JSON.stringify(store.getState())
}

btn2.onclick = function(){
  let id = valid.value;
  store.dispatch(remove_todo(id))
  strong.innerHTML=JSON.stringify(store.getState())
}
