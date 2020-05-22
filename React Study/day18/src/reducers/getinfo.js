/*
 * @Author: your name
 * @Date: 2020-05-21 21:04:11
 * @LastEditTime: 2020-05-21 21:46:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\getinfo.js
 */

import { INFO } from "src/actions";

const getinfo = (state = [], action) => {
  if (action.type === INFO) {
    return [...state, action.info];
  }
  return state;
};

export default getinfo;
