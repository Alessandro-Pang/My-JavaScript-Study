/*
 * @Author: your name
 * @Date: 2020-06-03 08:45:12
 * @LastEditTime: 2020-06-03 19:58:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\content\index.ts
 */

import { fromJS } from "immutable";
import { CONTENT_ARTICLE_LIST } from "../../actions/constants";

const initState = fromJS({
  article_list: [],
});

const contentReduces = (state = initState, action: any) => {
  switch (action.type) {
    case CONTENT_ARTICLE_LIST:
      return state.set("article_list", fromJS(action.article_list));
    default:
      return state;
  }
};

export default contentReduces;
