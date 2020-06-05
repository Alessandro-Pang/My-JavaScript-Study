/*
 * @Author: your name
 * @Date: 2020-05-27 21:57:39
 * @LastEditTime: 2020-06-05 00:25:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\login\index.js
 */

import { fromJS } from "immutable";
import {
  LOGIN_SUBMIT,
  LOGIN_USERNAME,
  LOGIN_PASSWORD,
  LOGIN_CHECKBOX,
} from "../../actions/constants";
const initState = fromJS({
  user_login_state: "error",
  username:"",
  password:"",
  remember:false
});

const login = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return state.set("user_login_state", action.user_login_state);
    case LOGIN_USERNAME:
      return state.set("username",action.username)
    case LOGIN_PASSWORD:
      return state.set("password",action.password)
    case LOGIN_CHECKBOX:
      return state.set("remember",!action.type)
    default:
      return state;
  }
};

export default login;
