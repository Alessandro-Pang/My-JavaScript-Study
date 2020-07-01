/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-01 22:12:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\blogFiling\store\reducers.js
 */

import {
  FILING_LIST,
} from "./constants";

const initState = {
  filingList:[],
};

const BlogFilingReducers = (state = initState, action) => {
  switch (action.type) {
    case FILING_LIST:
      return { ...state, filingList: action.filingList };
    default:
      return state;
  }
};

export default BlogFilingReducers;
