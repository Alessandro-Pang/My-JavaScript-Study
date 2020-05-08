/*
 * @Author: your name
 * @Date: 2020-05-06 15:21:48
 * @LastEditTime: 2020-05-08 00:09:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\reducers\index.js
 */
import { combineReducers } from "redux";
import counter from "./counter";
import counterFilter from "./counterFilter";
import todo from './todo'

const  reducers = combineReducers({
  counter,
  counterFilter,
  todo
});

export default reducers;