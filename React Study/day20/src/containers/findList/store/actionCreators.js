/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-05 23:11:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\findList\store\actionCreators.js
 */

import { GET_FINDARTICLE_LIST, FINDARTICLE_LIST } from "./constants";

export const get_findArticle = (typename, typeValue) => ({
  type: GET_FINDARTICLE_LIST,
  typename,
  typeValue,
});

export const findArticle = (articleList) => ({
  type: FINDARTICLE_LIST,
  articleList,
});
