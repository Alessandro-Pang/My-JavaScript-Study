/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-03 13:57:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\hotArticleList\store\reducers.js
 */

import { HOT_ARTICLE_LIST } from "./constants";

const initState = {
  hotList: [],
};

const HotArticleListReducers = (state = initState, action) => {
  switch (action.type) {
    case HOT_ARTICLE_LIST:
      return { ...state, hotList: action.hotList };
    default:
      return state;
  }
};

export default HotArticleListReducers;
