/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-07 12:03:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\search\store\actionCreators.js
 */

import {
  GET_SEARCH_LIST,
  SEARCH_LIST,
} from "./constants";

export const get_search_list = () => ({
  type: GET_SEARCH_LIST,
  searchText
});

export const search_list = (searchList) => ({
  type: SEARCH_LIST,
  searchList,
});