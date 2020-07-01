/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-07-01 15:26:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\labelTheWall\store\reducers.js
 */

import {
  TAG_LIST,
} from "./constants";

const initState = {
  tagList:[],
};

const LabelTheWallReducers = (state = initState, action) => {
  switch (action.type) {
    case TAG_LIST:
      return { ...state, tagList: action.tagList };
    default:
      return state;
  }
};

export default LabelTheWallReducers;
