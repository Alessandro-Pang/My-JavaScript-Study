/*
 * @Author: your name
 * @Date: 2020-05-05 22:49:03
 * @LastEditTime: 2020-05-05 23:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day14\src\reduces\index.js
 */
import {combineReducers} from "redux"
import todos from './todos';
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;