/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-01 08:49:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleContent\store\actionCreators.js
 */

import {
  GET_ARTICLE_INFO,
  ARTICLE_INFO,
} from "./constants";

export const get_article_info = (article_id) => ({
  type: GET_ARTICLE_INFO,
  article_id
});

export const article_info = (articleInfo) => ({
  type: ARTICLE_INFO,
  articleInfo,
});