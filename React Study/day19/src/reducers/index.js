/*
 * @Author: your name
 * @Date: 2020-05-27 21:55:51
 * @LastEditTime: 2020-05-27 22:06:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\index.js
 */ 
import { combineReducers } from "redux";
import loginReducers from "./login"
const reducers = combineReducers({
  loginReducers
})

export default reducers;