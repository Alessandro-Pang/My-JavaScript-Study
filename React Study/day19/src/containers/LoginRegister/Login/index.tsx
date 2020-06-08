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
import * as actionCreators from "../../../actions/actionCreators";
import { ElementRef } from "react";

const mapStateToProps = ({ loginReducers }: any) => ({
  username: loginReducers.get("username"),
  password: loginReducers.get("password"),
  checkbox: loginReducers.get("checkbox"),
  user_login_state: loginReducers.get("user_login_state"),
});


const mapDispatchToProps = (dispatch: Function) => ({
  handleLoginSubmit: (username: string, password: string) => {
    let loginInfo = { username, password };
    dispatch(actionCreators.fetch_login_user(loginInfo));
  },

  handleInputChange: (ref: ElementRef<"input">) => {
    switch (ref.name) {
      case "username":
        return dispatch(actionCreators.get_username(ref.value));
      case "password":
        return dispatch(actionCreators.get_password(ref.value));
      case "remember":
        return dispatch(actionCreators.get_remember(ref.checked));
      default:
        console.log(
          "%c" + new Error("not found form !"),
          "color:red;background:rgb(255,239,239)"
        );
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
