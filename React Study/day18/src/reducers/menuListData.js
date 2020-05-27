/*
 * @Author: your name
 * @Date: 2020-05-25 22:44:32
 * @LastEditTime: 2020-05-26 23:09:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\menuListData.js
 */

import { SHOW_ADD_MENU } from "src/actions";
const initState = {
  data: [],
  add: false,
};
const menuListData = (state = initState, action) => {
  switch (action.type) {
    case SHOW_ADD_MENU:
      return { data: state.data, add: !action.add };
    default:
      return state;
  }
};

export default menuListData;
