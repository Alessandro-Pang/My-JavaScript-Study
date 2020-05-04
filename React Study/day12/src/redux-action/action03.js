/*
 * @Author: your name
 * @Date: 2020-05-04 19:58:58
 * @LastEditTime: 2020-05-05 00:16:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\redux-action\action03.js
 */
import { createStore } from "redux";
import { add_todo, remove_todo } from "@/action";
import { todo } from "@/reducers";
import Common from "@/Common";

let store = createStore(todo);
const c = new Common();

let hr = c.create("hr");
let todos = c.create("input");
todos.type = "text";
todos.placeholder = "输入TODO";
let valid = c.create("input");
valid.type = "text";
valid.placeholder = "输入ID";

let btn = c.create("button");
btn.innerText = "add Todo";
let btn2 = c.create("button");
btn2.innerText = "remove Todo";

let strong = c.create("strong");
let br = c.create("br");
let br2 = c.create("br");
let br3 = c.create("br");
let hr2 = c.create("hr");
let div = c.create("div");
c.append([hr, todos, valid, br2,br3, btn, btn2, br, strong, hr2, div]);

let query = (subscribe) => {
  //每次订阅更新，先清空内容
  let val = "";
  //获取内容
  let stores = store.getState();
  stores.forEach((element) => {
    if (element) {
      if (subscribe) {
        val += "订阅更新：" + element.todo + "<br/>";
      } else {
        val += element.todo + "&nbsp;";
      }
    }
  });
  return val;
};

//发布订阅
store.subscribe(() => {
  let val = query(true);
  div.innerHTML = val;
});

//事件订阅
btn.onclick = function () {
  let val = todos.value;
  let id = valid.value;
  store.dispatch(add_todo(val, id));
  let vals = query();
  strong.innerHTML = vals;
};

btn2.onclick = function () {
  let id = valid.value;
  store.dispatch(remove_todo(id));
  let vals = query();
  strong.innerHTML = vals;
};
