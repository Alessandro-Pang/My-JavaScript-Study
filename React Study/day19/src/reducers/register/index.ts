/*
 * @Author: your name
 * @Date: 2020-06-05 14:22:10
 * @LastEditTime: 2020-06-08 13:50:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\register\index.ts
 */
import { fromJS } from "immutable";

import * as constants from "../../actions/constants";
import { register_actions_type } from "../../actions/actionCreators"
import { registerReducer_type } from "../../actions/types";

const initState = fromJS({
  username: "",
  password: "",
  phone: "",
  status: ""
})

const Register = (state = initState, action: register_actions_type): registerReducer_type => {
  switch (action.type) {
    case constants.REGISTER_USERNAME:
      return state.set("username", action.username);
    case constants.REGISTER_PHONE:
      return state.set("phone", action.phone);
    case constants.REGISTER_PASSWORD:
      return state.set("password", action.password);
    default:
      return state;
  }
}

export default Register;