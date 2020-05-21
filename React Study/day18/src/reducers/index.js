/*
 * @Author: your name
 * @Date: 2020-05-19 23:41:20
 * @LastEditTime: 2020-05-20 08:54:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\index.js
 */

import {INFO, GetUserInfo } from "src/actions";

const reducers = (state = [], action) => {
  if (action.type === INFO) {
    let newState = JSON.parse(JSON.stringify(state));
    return newState;
  } 
  return state;
};

reducers({type:INFO})

export default reducers;
