/*
 * @Author: your name
 * @Date: 2020-05-21 20:58:18
 * @LastEditTime: 2020-05-25 22:06:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\containers\Login.js
 */

import { connect } from "react-redux";
import { GetLoginUser,isLogin } from "src/actions";
import LoginBox from "@/LoginBox";

function login(login_user) {
  for (let i = 0; i < login_user.length; i++) {
    for (let j = 0; j < login_user[i].length; j++) {
      login_user[i][j].login > 0 ? true : false;
    }
  }
}

// #region 收缩代码

const mapStateToProps = (state) => ({
  isLogin: login([...state.login_user]),
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (userinfo) => {
    if (!userinfo.username || !userinfo.password) {
      return alert("请输入用户名密码！");
    }
    dispatch(GetLoginUser(userinfo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);

// #endregion