/*
 * @Author: your name
 * @Date: 2020-06-15 13:28:25
 * @LastEditTime: 2020-06-15 20:04:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\store\reducers\index.ts
 */

import { combineReducers } from "redux";
import { HomeReducers } from "../../containers/home/store";
const Reducers = combineReducers({
  HomeReducers,
});

export default Reducers;
