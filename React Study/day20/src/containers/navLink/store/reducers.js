/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-07 09:42:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\navLink\store\reducers.js
 */

import {
  NAV_LINK_LIST,
} from "./constants";

const initState = {
  navLinkList:[],
};

const NavLinkReducers = (state = initState, action) => {
  switch (action.type) {
    case NAV_LINK_LIST:
      return { ...state, navLinkList: action.navLinkList };
    default:
      return state;
  }
};

export default NavLinkReducers;
