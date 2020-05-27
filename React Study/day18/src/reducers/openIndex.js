/*
 * @Author: your name
 * @Date: 2020-05-26 21:17:43
 * @LastEditTime: 2020-05-26 22:02:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\reducers\openIndex.js
 */

import { MENU_LIST_DATA, COLLAPSED } from "src/actions";

const initState = {
  isClose: false,
  data: [],
};

/** action下的属性 应与actions中的相同 */
const opneIndex = (state = initState, action) => {
  switch (action.type) {
    case COLLAPSED:
      return { collapsed: !action.isClose, data: state.data };
    case MENU_LIST_DATA:
      return { collapsed: state.isClose, data: action.data };
    default:
      return state;
  }
};

export default opneIndex;
