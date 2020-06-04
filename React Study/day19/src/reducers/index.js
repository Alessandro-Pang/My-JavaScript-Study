/*
 * @Author: your name
 * @Date: 2020-05-27 21:55:51
 * @LastEditTime: 2020-06-03 08:51:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\index.js
 */ 
import { combineReducers } from "redux";
import loginReducers from "./login";
import headerReduces from "./header";
import contentReduces from "./content";

const reducers = combineReducers({
  loginReducers,
  headerReduces,
  contentReduces
})

export default reducers;