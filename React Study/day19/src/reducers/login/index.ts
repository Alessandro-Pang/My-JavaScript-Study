/*
 * @Author: your name
 * @Date: 2020-05-27 21:57:39
 * @LastEditTime: 2020-06-08 22:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\login\index.js
 */

import { fromJS } from "immutable";
import * as constants from "../../actions/constants";
import { Login_actions_type } from "../../actions/actionCreators";
import { loginReducer_type } from "../../actions/types";

const initState = fromJS({
  user_login_state: "error",
  username: "",
  password: "",
  remember: false,
  login_or_register: ""
});

const login = (state = initState, action: Login_actions_type):loginReducer_type => {
  switch (action.type) {
    case constants.LOGIN_SUBMIT:
      return state.set("user_login_state", action.user_login_state);
    case constants.LOGIN_USERNAME:
      return state.set("username", action.username)
    case constants.LOGIN_PASSWORD:
      return state.set("password", action.password)
    case constants.LOGIN_CHECKBOX:
      return state.set("remember", !action.type)
    case constants.LOGIN_OR_REGISTER:
      return state.set("login_or_register", action.login_or_register)
    default:
      return state;
  }
};

export default login;
