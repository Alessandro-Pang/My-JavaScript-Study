/*
 * @Author: your name
 * @Date: 2020-05-28 23:24:12
 * @LastEditTime: 2020-06-13 21:08:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\actions\actionCreators.ts
 */

import * as constants from "./constants";
import immutable from "immutable";
import Dialog from "../components/dialog";
const base_url = "http://127.0.0.1:3300/db/";

//#region input focus
export interface input_focus_type {
  type: constants.HEADER_INPUT_FOCUS,
  focusd: boolean
}

export const input_focus = (focusd: boolean): input_focus_type => ({
  type: constants.HEADER_INPUT_FOCUS,
  focusd,
});

export interface input_blur_type {
  type: constants.HEADER_INPUT_BLUR,
  focusd: boolean
}

export const input_blur = (focusd: boolean): input_blur_type => ({
  type: constants.HEADER_INPUT_BLUR,
  focusd,
});

//#endregion

//#region hotbox
export interface hotbox_mouseIn_type {
  type: constants.HEADER_HOTBOX_MOUSEIN,
  mouseIn: boolean
}

export const hotbox_mouseIn = (mouseIn: boolean): hotbox_mouseIn_type => ({
  type: constants.HEADER_HOTBOX_MOUSEIN,
  mouseIn,
});

export interface hotbox_mouseOut_type {
  type: constants.HEADER_HOTBOX_MOUSEOUT,
  mouseIn: boolean
};

export const hotbox_mouseOut = (mouseIn: boolean): hotbox_mouseOut_type => ({
  type: constants.HEADER_HOTBOX_MOUSEOUT,
  mouseIn,
});

interface hotbox_list_type {
  type: constants.HEADER_HOTBOX_LIST,
  list: immutable.List<string>
};

const hotbox_list = (list: immutable.List<string>): hotbox_list_type => ({
  type: constants.HEADER_HOTBOX_LIST,
  list,
});

export const get_hotbox_list = () => (dispatch: any) => {
  fetch(`${base_url}/hot_list`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(hotbox_list(res.data));
    });
};

export interface get_hotbox_page_type {
  type: constants.HEADER_HOTBOX_PAGE,
  page: number
};

export const get_hotbox_page = (page: number): get_hotbox_page_type => ({
  type: constants.HEADER_HOTBOX_PAGE,
  page,
});

export type Hotbox_actions_type = (
  input_focus_type |
  input_blur_type |
  hotbox_mouseIn_type |
  hotbox_mouseOut_type |
  hotbox_list_type |
  get_hotbox_page_type
);
//#endregion

//#region acticle

interface article_list_type {
  type: constants.CONTENT_ARTICLE_LIST,
  article_list: immutable.List<string>
}

const article_list = (article_list: immutable.List<string>): article_list_type => ({
  type: constants.CONTENT_ARTICLE_LIST,
  article_list,
});

export const get_article_list = () => (dispatch: any) => {
  fetch(`${base_url}/article_list`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(article_list(res.data));
    });
};

//#endregion

// #region LOGIN action creator
export interface get_username_type {
  type: constants.LOGIN_USERNAME,
  username: string
}
export interface get_password_type {
  type: constants.LOGIN_PASSWORD,
  password: string,
}
export interface get_remember_type {
  type: constants.LOGIN_CHECKBOX,
  remember: boolean,
}
export interface login_or_register_type {
  type: constants.LOGIN_OR_REGISTER,
  login_or_register: string,
}
export interface login_user_success_type {
  type: constants.LOGIN_SUBMIT,
  user_login_state: string
}
export interface login_user_error_type {
  type: constants.LOGIN_SUBMIT,
  user_login_state: string,
}
export const get_username = (username: string): get_username_type => ({
  type: constants.LOGIN_USERNAME,
  username,
});

export const get_password = (password: string): get_password_type => ({
  type: constants.LOGIN_PASSWORD,
  password,
});

export const get_remember = (remember: boolean): get_remember_type => ({
  type: constants.LOGIN_CHECKBOX,
  remember,
});

export const login_or_register = (login_or_register: string): login_or_register_type => ({
  type: constants.LOGIN_OR_REGISTER,
  login_or_register,
});

export const login_user_success = (user_login_state: string): login_user_success_type => ({
  type: constants.LOGIN_SUBMIT,
  user_login_state,
});

export const login_user_error = (user_login_state: string): login_user_error_type => ({
  type: constants.LOGIN_SUBMIT,
  user_login_state,
});

export const fetch_login_user = (loginInfo: object) => (dispatch: Function) => {
  fetch(`${base_url}/login`, {
    method: "post",
    mode: "cors",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch(login_user_success(res.status));
      } else if (res.status === "error") {
        dispatch(login_user_error(res.status));
      }
    })
    .catch(() => {
      alert("网路异常！");
    });
};

export type Login_actions_type = (
  get_username_type |
  get_password_type |
  get_remember_type |
  login_or_register_type |
  login_user_success_type |
  login_user_error_type
);

//#endregion

// #region Register action creator
export interface get_register_username_type {
  type: constants.REGISTER_USERNAME,
  username: string,
}
export interface get_register_password_type {
  type: constants.REGISTER_PASSWORD,
  password: string,
}
export interface get_register_phone_type {
  type: constants.REGISTER_PHONE,
  phone: number,
}
export interface user_register_success_type {
  type: constants.REGISTER_SUBMIT,
  status: string,
}
export interface user_register_error_type {
  type: constants.REGISTER_SUBMIT,
  status: string,
}

export const get_register_username = (username: string): get_register_username_type => ({
  type: constants.REGISTER_USERNAME,
  username,
});

export const get_register_password = (password: string): get_register_password_type => ({
  type: constants.REGISTER_PASSWORD,
  password,
});

export const get_register_phone = (phone: number): get_register_phone_type => ({
  type: constants.REGISTER_PHONE,
  phone,
});

export const user_register_success = (status: string): user_register_success_type => ({
  type: constants.REGISTER_SUBMIT,
  status,
});

export const user_register_error = (status: string): user_register_error_type => ({
  type: constants.REGISTER_SUBMIT,
  status,
});

export const fetch_user_register = (userInfo: object) => (dispatch: any) => {
  fetch(`${base_url}/register`, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        dispatch(user_register_success(res.status));
        alert("用户注册成功！");
        return;
      }
      dispatch(user_register_error(res.status));
      alert(res.data);
    })
    .catch((err) => console.error(err));
};

export type register_actions_type = (
  get_register_username_type |
  get_register_password_type |
  get_register_phone_type |
  user_register_success_type |
  user_register_error_type
);

// #endregion

// #region article action
export interface get_article_info_type {
  type:constants.ARTICLE_ONCTNET,
  content:string
};

export const get_article_info = (content: string): get_article_info_type => ({
  type: constants.ARTICLE_ONCTNET,
  content,
});

export type article_info_type =(
  get_article_info_type
)

// #endregion