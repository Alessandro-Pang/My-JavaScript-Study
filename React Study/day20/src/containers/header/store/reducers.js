/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-06-27 23:59:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\header\store\reducers.js
 */ 

import  {MENU_INFO} from "./constants";

const initState = {
  menus:[]
}

const MenuReducers= (state=initState,action) =>{
  switch(action.type){
    case MENU_INFO:
      return {menus:action.menus};
    default:
      return state
  }
}

export default MenuReducers ;
