/*
 * @Author: your name
 * @Date: 2020-06-15 13:37:26
 * @LastEditTime: 2020-06-15 19:17:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\page\Home\store\reducers.js
 */

import { USER_INFO } from "./constants";

const initState = {
  data: [],
};

const HomeReducers = (state = initState, action) => {
  switch (action.type) {
    case USER_INFO:
      return { data: action.data };
    default:
      return state;
  }
};
export default HomeReducers ;
