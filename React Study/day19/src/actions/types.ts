/*
 * @Author: your name
 * @Date: 2020-06-08 13:45:45
 * @LastEditTime: 2020-06-08 21:41:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\actions\types.ts
 */
import immutable from "immutable";

export type headerReduces_type = {
  HEADER_INPUT_FOCUS: boolean,
  HEADER_INPUT_BLUR: boolean,
  HEADER_HOTBOX_MOUSEIN: boolean,
  HEADER_HOTBOX_MOUSEOUT: boolean,
  HEADER_HOTBOX_LIST: immutable.List<string>,
  HEADER_HOTBOX_PAGE: number
};

export type loginReducer_type = {
  LOGIN_USERNAME: string,
  LOGIN_PASSWORD: string,
  LOGIN_CHECKBOX: boolean,
  LOGIN_SUBMIT: string,
  LOGIN_OR_REGISTER: string
}

export type registerReducer_type = {
  REGISTER_USERNAME: string,
  REGISTER_PHONE: number,
  REGISTER_PASSWORD: string
}