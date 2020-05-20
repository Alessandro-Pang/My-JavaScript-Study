/*
 * @Author: your name
 * @Date: 2020-05-19 23:41:20
 * @LastEditTime: 2020-05-20 00:00:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\index.js
 */

import { ADD, DIFF } from "src/actions";

const reducers = (state = 0, action) => {
  if (action.type === ADD) {
    console.log('.....................'+state)
    return state + 1;
  } else if (action.type === DIFF) {
    return state - 1;
  } else {
    return state;
  }
};

export default reducers;
