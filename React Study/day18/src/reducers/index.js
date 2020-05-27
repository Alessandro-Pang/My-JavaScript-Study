/*
 * @Author: your name
 * @Date: 2020-05-19 23:41:20
 * @LastEditTime: 2020-05-26 23:51:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\index.js
 */
import openIndex from "./openIndex";
import login_user from "./login_user";
import menuListData from "./menuListData";
import { combineReducers } from "redux";

const reducers = combineReducers({
  openIndex,
  login_user,
  menuListData,
});

export default reducers;
