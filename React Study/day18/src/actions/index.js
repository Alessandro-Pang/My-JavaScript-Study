/*
 * @Author: your name
 * @Date: 2020-05-19 08:11:57
 * @LastEditTime: 2020-05-21 22:43:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\actions\index.js
 */

export const ADD = "ADD";
export const DIFF = "DIFF";
export const INFO = "INFO";
export const LOGIN = "LOGIN";

export const showINFO = (info) => ({
  type: INFO,
  info,
});

export const GetUserInfo = () => (dispatch) =>
  fetch("http://127.0.0.1:3300/db/queryUser?username=庞超")
    .then((res) => res.json())
    .then((info) => {
      console.log(1999);
      dispatch(showINFO(info));
    });

export const Login_User = (user) => ({
  type: LOGIN,
  user,
});

export const GetLoginUser = (userinfo) => (dispatch) => {
  if (!userinfo.username && !userinfo.password) {
    return alert("请输入用户名密码！");
  }
  fetch("http://127.0.0.1:3300/db/login", {
    method: "POST",
    mode: "cors", //跨域请求
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userinfo),
  })
    .then((res) => res.json())
    .then((res) => {
      document.cookie = "usernaem=" + res.username + ";expires=" + 10000;
      dispatch(Login_User(res));
    })
    .catch((err) => {
      console.log(err);
    });
};
