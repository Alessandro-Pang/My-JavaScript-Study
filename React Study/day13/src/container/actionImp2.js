/*
 * @Author: your name
 * @Date: 2020-05-05 12:08:19
 * @LastEditTime: 2020-05-05 12:52:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\src\container\actionImp2.js
 */
import {createStore} from 'redux'
import todo from '@/reducers/expand';
import {add_todo,remove_todo,set_todo_state} from '@/action';

let store = createStore(todo);

let strong = document.createElement("strong");
document.body.appendChild(strong);
store.subscribe(()=>{
  let val = "";
  val += "<div style='color:green'>todos 订阅更新：<div> <div style='color:black'>"+ JSON.stringify(store.getState().todos)+"</div></br>";
  val += "<div style='color:green'>todoState 订阅更新：<div> <div style='color:black'>"+ JSON.stringify(store.getState().todoState)+"</div></br>";
  
  strong.innerHTML=val;
})

store.dispatch(add_todo("第一条TODO信息"));
store.dispatch(add_todo("第二条TODO信息"));
store.dispatch(set_todo_state("SHOW_SMALL"));
store.dispatch(add_todo("第三条TODO信息"));
store.dispatch(remove_todo(1));
store.dispatch(set_todo_state("SHOW_SCRNNER"));