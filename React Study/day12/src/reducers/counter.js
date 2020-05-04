/*
 * @Author: your name
 * @Date: 2020-05-04 18:47:23
 * @LastEditTime: 2020-05-04 18:47:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\reducers\counter\index.js
 */
export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};