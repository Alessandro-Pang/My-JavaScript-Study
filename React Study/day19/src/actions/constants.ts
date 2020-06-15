/*
 * @Author: your name
 * @Date: 2020-05-28 23:23:56
 * @LastEditTime: 2020-06-13 10:58:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\actions\actionTypes.ts
 */ 
export const HEADER_INPUT_FOCUS = 'header/input_focus';
export const HEADER_INPUT_BLUR = 'header/input_blur';
export const HEADER_HOTBOX_MOUSEIN = "header/hotbox_mouseIn";
export const HEADER_HOTBOX_MOUSEOUT = "header/hotbox_mouseOut";
export const HEADER_HOTBOX_LIST = "header/hotbox_list";
export const HEADER_HOTBOX_PAGE = "header/hotbox_page";
export type HEADER_INPUT_FOCUS = typeof HEADER_INPUT_FOCUS;
export type HEADER_INPUT_BLUR = typeof HEADER_INPUT_BLUR;
export type HEADER_HOTBOX_MOUSEIN = typeof HEADER_HOTBOX_MOUSEIN;
export type HEADER_HOTBOX_MOUSEOUT = typeof HEADER_HOTBOX_MOUSEOUT;
export type HEADER_HOTBOX_LIST = typeof HEADER_HOTBOX_LIST;
export type HEADER_HOTBOX_PAGE = typeof HEADER_HOTBOX_PAGE;

export const CONTENT_ARTICLE_LIST = "content/article_list";
export type CONTENT_ARTICLE_LIST = typeof CONTENT_ARTICLE_LIST;

export const LOGIN_USERNAME = "loginRegister/username";
export const LOGIN_PASSWORD = "loginRegister/password";
export const LOGIN_CHECKBOX = "loginRegister/checkbox";
export const LOGIN_SUBMIT = "loginRegister/login";
export type LOGIN_USERNAME = typeof LOGIN_USERNAME;
export type LOGIN_PASSWORD = typeof LOGIN_PASSWORD;
export type LOGIN_CHECKBOX = typeof LOGIN_CHECKBOX;
export type LOGIN_SUBMIT = typeof LOGIN_SUBMIT;

export const LOGIN_OR_REGISTER = "loginRegister/login_or_register";
export type LOGIN_OR_REGISTER = typeof LOGIN_OR_REGISTER;

export const REGISTER_USERNAME = "register/username";
export const REGISTER_PASSWORD = "register/password";
export const REGISTER_PHONE = "register/phone";
export const REGISTER_SUBMIT = "loginRegister/register";
export type REGISTER_USERNAME = typeof REGISTER_USERNAME;
export type REGISTER_PASSWORD = typeof REGISTER_PASSWORD;
export type REGISTER_PHONE = typeof REGISTER_PHONE;
export type REGISTER_SUBMIT = typeof REGISTER_SUBMIT;

export const ARTICLE_ONCTNET = "article/content_info";
export type ARTICLE_ONCTNET = typeof ARTICLE_ONCTNET;