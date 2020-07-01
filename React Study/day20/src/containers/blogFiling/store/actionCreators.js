/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-01 22:17:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\blogFiling\store\actionCreators.js
 */

import {
  GET_FILING_LIST,
  FILING_LIST,
} from "./constants";

export const get_filing_list = () => ({
  type: GET_FILING_LIST,
});

export const filing_list = (filingList) => ({
  type: FILING_LIST,
  filingList,
});