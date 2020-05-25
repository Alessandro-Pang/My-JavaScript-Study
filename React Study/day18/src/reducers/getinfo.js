/*
 * @Author: your name
 * @Date: 2020-05-21 21:04:11
 * @LastEditTime: 2020-05-25 21:23:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\getinfo.js
 */

import { INFO } from "src/actions";
const initState = [{
  info: []
}];
const getinfo = (state = initState, action) => {
  if (action.type === INFO) {
    return [...state, {info:action.info}];
  }

  return state
};

export default getinfo;
