/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-06 08:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleList\store\reducers.js
 */

import {
  ARTICLE_INFO,
  SET_PAGE_SIZE_NUM,
  ARTICLE_LIMIT_LIST,
  PAGE_NUMBER,
} from "./constants";

const initState = {
  articleList: null,
  articleLimit:[],
  pagesize: 10,
  page: 1,
};

const ArticleListReducers = (state = initState, action) => {
  switch (action.type) {
    case ARTICLE_INFO:
      return { ...state, articleList: action.articleList };
    case SET_PAGE_SIZE_NUM:
      return { ...state, pagesize: action.pagesize };
    case PAGE_NUMBER:
      return { ...state, page: action.page };
    case ARTICLE_LIMIT_LIST:
      return {...state,articleLimit:action.articleLimit}
    default:
      return state;
  }
};

export default ArticleListReducers;
