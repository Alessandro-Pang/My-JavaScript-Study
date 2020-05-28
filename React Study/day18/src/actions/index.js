/*
 * @Author: your name
 * @Date: 2020-05-19 08:11:57
 * @LastEditTime: 2020-05-27 08:26:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\actions\index.js
 */

export const LOGIN_USER = "LOGIN_USER";
export const ADD_MENU = "ADD_MENU";
export const SHOW_ADD_MENU = "SHOW_ADD_MENU";
export const MENU_LIST_DATA = "MENU_LIST_DATA";
export const COLLAPSED = "COLLAPSED";

const showINFO = (info) => ({
  type: INFO,
  info,
});

export const GetUserInfo = () => (dispatch) =>
  fetch("http://127.0.0.1:3300/db/queryUser?username=庞超")
    .then((res) => res.json())
    .then((info) => {
      dispatch(showINFO(info));
    });

const login_user = (user) => ({
  type: LOGIN_USER,
  user,
});
export const GetLoginUser = (userinfo) => (dispatch) => {
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
      const { login, username } = res.data;
      console.log(username);
      dispatch(login_user(username));
      if (login !== 0) {
        document.cookie = "isLogin=true";
        location.href = "/index";
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleAddMenu = (value) => (dispatch) => {
  if (!value.navName && !value.href && !value.link) {
    return console.log("表单不允许为空");
  }
  fetch("http://127.0.0.1:3300/db/add_menu", {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
};

const MenuListData = (data) => ({
  type: MENU_LIST_DATA,
  data,
});

export const GetMenuList = () => (dispatch) => {
  fetch("http://127.0.0.1:3300/db/menu_name")
    .then((res) => res.json())
    .then((res) => {
      dispatch(MenuListData(res));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const showADDmenu = (add) => ({
  type: SHOW_ADD_MENU,
  add,
});

export const collapsed = (isClose) => ({
  type: COLLAPSED,
  isClose,
});
