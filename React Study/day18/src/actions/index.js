/*
 * @Author: your name
 * @Date: 2020-05-19 08:11:57
 * @LastEditTime: 2020-05-25 23:18:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\actions\index.js
 */

export const ADD = "ADD";
export const DIFF = "DIFF";
export const INFO = "INFO";
export const LOGIN = "LOGIN";
export const ISLOGIN = "ISLOGIN";
export const ADD_MENU = "ADD_MENU";
export const SHOW_ADD_MENU = "SHOW_ADD_MENU"
export const MENU_LIST_DATA = "MENU_LIST_DATA"

export const showINFO = (info) => ({
  type: INFO,
  info,
});

export const GetUserInfo = () => (dispatch) =>
  fetch("http://127.0.0.1:3300/db/queryUser?username=庞超")
    .then((res) => res.json())
    .then((info) => {
      dispatch(showINFO(info));
    });

export const Login_User = (user) => ({
  type: LOGIN,
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
      dispatch(Login_User(res));
      if(res[0].login!==0){
        document.cookie = "isLogin=true";
        location.href="/index";
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleAddMenu = value => dispatch =>{
  console.log(value);
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
}

const MenuListData = data =>({
  type:MENU_LIST_DATA,
  data
});

export const GetMenuList = ()=>dispatch =>{
  fetch("http://127.0.0.1:3300/db/menu_name")
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
    dispatch(MenuListData(res))
  })
  .catch((err) => {
    console.log(err);
  });
}

export const showADDmenu = state =>({
  type:SHOW_ADD_MENU,
  state
})