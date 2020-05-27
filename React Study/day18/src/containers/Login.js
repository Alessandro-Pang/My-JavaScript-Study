/*
 * @Author: your name
 * @Date: 2020-05-21 20:58:18
 * @LastEditTime: 2020-05-26 21:51:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\containers\Login.js
 */

import { connect } from "react-redux";
import { GetLoginUser,isLogin } from "src/actions";
import LoginBox from "@/LoginBox";

// #region 收缩代码

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (userinfo) => {
    if (!userinfo.username || !userinfo.password) {
      return alert("请输入用户名密码！");
    }
    dispatch(GetLoginUser(userinfo));
  },
});

export default connect(null, mapDispatchToProps)(LoginBox);

// #endregion