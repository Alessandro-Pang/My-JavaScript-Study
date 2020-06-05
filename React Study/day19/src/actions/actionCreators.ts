/*
 * @Author: your name
 * @Date: 2020-05-28 23:24:12
 * @LastEditTime: 2020-06-05 00:25:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\actions\actionCreators.ts
 */

import {
  HEADER_INPUT_FOCUS,
  HEADER_INPUT_BLUR,
  HEADER_HOTBOX_MOUSEIN,
  HEADER_HOTBOX_MOUSEOUT,
  HEADER_HOTBOX_LIST,
  HEADER_HOTBOX_PAGE,
  CONTENT_ARTICLE_LIST,
  LOGIN_SUBMIT,
  LOGIN_USERNAME,
  LOGIN_PASSWORD,
  LOGIN_CHECKBOX
} from "./constants";

export const input_focus = (focusd: boolean) => ({
  type: HEADER_INPUT_FOCUS,
  focusd,
});

export const input_blur = (focusd: boolean) => ({
  type: HEADER_INPUT_BLUR,
  focusd,
});

export const hotbox_mouseIn = (mouseIn: boolean) => ({
  type: HEADER_HOTBOX_MOUSEIN,
  mouseIn,
});

export const hotbox_mouseOut = (mouseIn: boolean) => ({
  type: HEADER_HOTBOX_MOUSEOUT,
  mouseIn,
});

const hotbox_list = (list: object) => ({
  type: HEADER_HOTBOX_LIST,
  list,
});

export const get_hotbox_list = () => (dispatch: any) => {
  fetch("http://127.0.0.1:3300/db/hot_list")
    .then((res) => res.json())
    .then((res) => {
      dispatch(hotbox_list(res.data));
    });
};

export const get_hotbox_page = (page: number) => ({
  type: HEADER_HOTBOX_PAGE,
  page,
});


export const article_list = (article_list:any) =>({
  type:CONTENT_ARTICLE_LIST,
  article_list
})

export const get_article_list = () => (dispatch:any) =>{
  fetch("http://127.0.0.1:3300/db/article_list")
    .then(res => res.json())
    .then(res=>{
      dispatch(article_list(res.data))
    })
}

export const login_user_success = (user_login_state:string) => ({
  type:LOGIN_SUBMIT,
  user_login_state
})

export const login_user_error = (user_login_state:string) => ({
  type:LOGIN_SUBMIT,
  user_login_state
})

export const fetch_login_user = (loginInfo:object) => (dispatch:Function) =>{
  fetch("http://127.0.0.1:3300/db/login",{
    method:"post",
    mode:"cors",
    body:JSON.stringify(loginInfo),
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then(res=>res.json())
  .then(res=>{
    if(res.status === "success"){
      dispatch(login_user_success(res.status));
      alert("登录成功")
    }else if(res.status === "error"){
      dispatch(login_user_error(res.status));
      alert("登录失败")
    }
  })
  .catch(()=>{
    alert("网路异常！")
  })
}

export const get_username = (username:string) => ({
  type:  LOGIN_USERNAME,
  username
})

export const get_password = (password:string) =>({
  type: LOGIN_PASSWORD,
  password
})

export const get_remember = (remember:boolean) =>({
  type:LOGIN_CHECKBOX,
  remember
})