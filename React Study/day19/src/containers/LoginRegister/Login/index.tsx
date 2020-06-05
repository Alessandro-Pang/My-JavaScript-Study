/**
 * @Author: your name
 * @Date: 2020-06-04 08:30:32
 * @LastEditTime: 2020-06-04 08:39:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\containers\Login\index.ts
 */

import { connect } from "react-redux";
import Login from "../../../components/LoginRegister/Login";
import {
  fetch_login_user,
  get_username,
  get_password,
  get_remember,
} from "../../../actions/actionCreators";

const mapStateToProps = (state: any) => ({
  username: state.loginReducers.get("username"),
  password: state.loginReducers.get("password"),
  checkbox: state.loginReducers.get("checkbox"),
  user_login_state: state.loginReducers.get("user_login_state"),
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleLoginSubmit: (username: string, password: string) => {
    let loginInfo = {
      username,
      password,
    };
    dispatch(fetch_login_user(loginInfo));
  },

  handleInputChange: (ref: any) => {
    switch (ref.name) {
      case "username":
        return dispatch(get_username(ref.value));
      case "password":
        return dispatch(get_password(ref.value));
      case "checkbox":
        return dispatch(get_remember(ref.value));
      default:
        console.log(
          "%c" + new Error("not found form !"),
          "color:red;background:rgb(255,239,239)"
        );
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
