/*
 * @Author: your name
 * @Date: 2020-05-25 22:44:32
 * @LastEditTime: 2020-05-25 23:08:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\menuListData.js
 */

import { MENU_LIST_DATA ,SHOW_ADD_MENU} from "src/actions";

const menuListData = (state=[], action) => {
  switch(action.type){
    case MENU_LIST_DATA:
      return [...state,action.data]
    case SHOW_ADD_MENU:
      return !action.state
    default :
      return state
  }
};

export default menuListData;