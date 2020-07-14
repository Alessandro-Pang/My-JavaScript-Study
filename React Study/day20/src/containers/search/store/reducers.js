/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-07 11:34:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\search\store\reducers.js
 */

import { SEARCH_LIST } from "./constants";

const initState = {
  searchList: [],
};

const SearchReducers = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_LIST:
      return { ...state, searchList: action.searchList };
    default:
      return state;
  }
};

export default SearchReducers;
