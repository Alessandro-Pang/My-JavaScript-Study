/*
 * @Author: your name
 * @Date: 2020-05-27 21:57:39
 * @LastEditTime: 2020-06-05 14:23:23
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
  LOGIN_OR_REGISTER
} from "../../actions/constants";
const initState = fromJS({
  user_login_state: "error",
  username:"",
  password:"",
  remember:false,
  login_or_register:""
});

const login = (state = initState, action:any) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return state.set("user_login_state", action.user_login_state);
    case LOGIN_USERNAME:
      return state.set("username",action.username)
    case LOGIN_PASSWORD:
      return state.set("password",action.password)
    case LOGIN_CHECKBOX:
      return state.set("remember",!action.type)
    case LOGIN_OR_REGISTER:
      return state.set("login_or_register",action.login_or_register)
    default:
      return state;
  }
};

export default login;
