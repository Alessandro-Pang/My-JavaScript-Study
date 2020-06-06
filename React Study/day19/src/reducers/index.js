/*
 * @Author: your name
 * @Date: 2020-05-27 21:55:51
 * @LastEditTime: 2020-06-05 14:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\index.js
 */ 
import { combineReducers } from "redux";
import loginReducers from "./login";
import headerReduces from "./header";
import contentReduces from "./content";
import registerReduces from "./register";

const reducers = combineReducers({
  loginReducers,
  headerReduces,
  contentReduces,
  registerReduces
})

export default reducers;