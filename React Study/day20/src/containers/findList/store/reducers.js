/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-05 23:01:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\findList\store\reducers.js
 */

import {
  FINDARTICLE_LIST,
} from "./constants";

const initState = {
  articleList: []
}
const FindArticleListReducers = (state = initState, action) => {
  switch (action.type) {
    case FINDARTICLE_LIST:
      return { ...state, articleList: action.articleList };
    default:
      return state;
  }
};

export default FindArticleListReducers;
