/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:18:10
 * @LastEditTime: 2020-07-02 07:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\labelTheWall\store\actionCreators.js
 */

import {
  GET_TAG_LIST,
  TAG_LIST,
} from "./constants";

export const get_tag_list = () => ({
  type: GET_TAG_LIST,
});

export const tag_list = (tagList) => ({
  type: TAG_LIST,
  tagList,
});