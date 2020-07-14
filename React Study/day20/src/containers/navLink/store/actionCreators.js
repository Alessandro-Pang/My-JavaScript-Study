/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-07 09:36:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\navLink\store\actionCreators.js
 */

import {
  GET_NAV_LINK_LIST,
  NAV_LINK_LIST,
} from "./constants";

export const get_navlink_list = () => ({
  type: GET_NAV_LINK_LIST,
});

export const navlink_list = (navLinkList) => ({
  type: NAV_LINK_LIST,
  navLinkList,
});