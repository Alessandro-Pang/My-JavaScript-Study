/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-06 08:27:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleContent\store\reducers.js
 */

import {
  ARTICLE_INFO,
} from "./constants";

const initState = {
  articleInfo: null,
};

const ArticleContentReducers = (state = initState, action) => {
  switch (action.type) {
    case ARTICLE_INFO:
      return { ...state, articleInfo: action.articleInfo };
    default:
      return state;
  }
};

export default ArticleContentReducers;
