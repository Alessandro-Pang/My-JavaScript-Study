/*
 * @Author: your name
 * @Date: 2020-05-21 20:58:18
 * @LastEditTime: 2020-05-21 22:46:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\containers\Login.js
 */

import { connect } from "react-redux";
import { GetLoginUser } from "src/actions";
import LoginBox from "@/LoginBox";

function login(login_user) {
  for (let i = 0; i < login_user.length; i++) {
    for (let j = 0; j < login_user[i].length; j++) {
      return login_user[i][j].login > 0 ? true : false;
    }
  }
}

const mapStateToProps = (state) => ({
  isLogin: login([...state.login_user]),
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (userinfo) => {
    console.log("........." + userinfo);
    dispatch(GetLoginUser(userinfo));
  },
  loginSkip: (isLogin) => {
    let timer = setInterval(() => {
      console.log(isLogin)
      if (isLogin !== undefined) {
        if (isLogin) {
          clearInterval(timer)
          return (location.href = "/index");
        }
        clearInterval(timer)
        return alert("登录失败");
      }
    }, 10);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
