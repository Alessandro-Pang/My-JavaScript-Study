/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-06-30 08:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleList\store\actionCreators.js
 */

import {
  GET_ARTICLE_INFO,
  ARTICLE_INFO,
  PAGE_NUMBER,
  SET_PAGE_OFFSET_NUM,
  SET_PAGE_SIZE_NUM
} from "./constants";

export const get_article_info = (offset, pagesize) => ({
  type: GET_ARTICLE_INFO,
  offset,
  pagesize,
});

export const article_info = (articleList) => ({
  type: ARTICLE_INFO,
  articleList,
});

export const set_page = (page) =>({
  type:PAGE_NUMBER,
  page
})

export const set_page_offset = (offset) => ({
  type:SET_PAGE_OFFSET_NUM,
  offset
});

export const set_page_size = (pagesize)=>({
  type:SET_PAGE_SIZE_NUM,
  pagesize
})
