/*
 * @Author: your name
 * @Date: 2020-05-05 00:24:34
 * @LastEditTime: 2020-05-05 00:45:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\redux-action\action04.js
 */
import {createStore} from 'redux'
import {addTodo,toggleTodo,setVisibilityFilter} from '@/action/course'
import todoApp from '@/reducers/course';

let store = createStore(todoApp)

store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(addTodo("子洋"))
store.dispatch(addTodo("庞超"))
store.dispatch(addTodo("枭筱龙"))
store.dispatch(setVisibilityFilter("SHOW_COMPLETED"))

store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(2))
store.dispatch(setVisibilityFilter("SHOW_ACTIVE"))
