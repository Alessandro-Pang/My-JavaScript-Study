/*
 * @Author: your name
 * @Date: 2020-06-15 13:28:25
 * @LastEditTime: 2020-06-27 23:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\store\reducers\index.js
 */

import { combineReducers } from "redux";
import HeaderReducers from "container/header/store/reducers";
const Reducers = combineReducers({
  HeaderReducers
});

export default Reducers;
