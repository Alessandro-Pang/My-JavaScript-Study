/*
 * @Author: your name
 * @Date: 2020-05-26 23:48:12
 * @LastEditTime: 2020-05-26 23:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\login_user.js
 */

import { LOGIN_USER } from "src/actions";

const initState = {
  user: "",
};

const login_user = (state = initState, action) => {
  if (action.type === LOGIN_USER) {
    return action.user;
  }
  return state;
};

export default login_user;
