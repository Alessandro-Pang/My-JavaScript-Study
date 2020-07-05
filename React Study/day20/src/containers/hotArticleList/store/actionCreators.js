/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-03 14:17:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\hotArticleList\store\actionCreators.js
 */
import { GET_HOT_ARTICLE_LIST,HOT_ARTICLE_LIST } from "./constants";
export const get_hot_article_list = () =>({
  type:GET_HOT_ARTICLE_LIST
})

export const hot_article_list = (hotList) => ({
  type: HOT_ARTICLE_LIST,
  hotList
});
