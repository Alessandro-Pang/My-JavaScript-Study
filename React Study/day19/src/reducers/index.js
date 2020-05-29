/*
 * @Author: your name
 * @Date: 2020-05-27 21:55:51
 * @LastEditTime: 2020-05-28 23:36:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\index.js
 */ 
import { combineReducers } from "redux";
import loginReducers from "./login";
import headerReduces from "./header"
const reducers = combineReducers({
  loginReducers,
  headerReduces
})

export default reducers;