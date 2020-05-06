/*
 * @Author: your name
 * @Date: 2020-05-06 16:51:15
 * @LastEditTime: 2020-05-06 17:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\reducers\add.js
 */
import { ADD, SUBTRACT } from "src/actions";
const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + action.addNumber;

    case SUBTRACT:
      return state - action.subNumber;

    default:
      return state;
  }
};
export default counter