/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-06-30 16:09:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\header\store\actionCreators.js
 */ 
import {GET_MENU_INFO,MENU_INFO} from "./constants";

export const get_menu_info = () =>({
  type:GET_MENU_INFO
})

export const menu_info = (menus) =>({
  type:MENU_INFO,
  menus
})