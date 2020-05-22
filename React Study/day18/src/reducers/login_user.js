/*
 * @Author: your name
 * @Date: 2020-05-21 21:13:16
 * @LastEditTime: 2020-05-21 21:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\login_user.js
 */

import { LOGIN } from "src/actions";

const login_user = (state = [], action) => {
  if (action.type === LOGIN) {
    return [...state, action.user];
  }
  return state;
};

export default login_user;
