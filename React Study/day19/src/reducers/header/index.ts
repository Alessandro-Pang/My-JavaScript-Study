/*
 * @Author: your name
 * @Date: 2020-05-28 23:31:13
 * @LastEditTime: 2020-06-03 19:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\header\input_focus.ts
 */

import { fromJS } from "immutable";
import {
  HEADER_INPUT_FOCUS,
  HEADER_INPUT_BLUR,
  HEADER_HOTBOX_MOUSEIN,
  HEADER_HOTBOX_MOUSEOUT,
  HEADER_HOTBOX_LIST,
  HEADER_HOTBOX_PAGE
} from "../../actions/constants";

//使用immutable 这里不可以设置为 object
const initState: any = fromJS({
  focusd: false,
  mouseIn: false,
  list: [],
  page:1
});

// immutable 中 Array 也是 Object 类型（immutable 对象） 
const headerReduces = (state = initState, action: any) => {
  switch (action.type) {
    case HEADER_INPUT_FOCUS:
      return state.set("focusd", true);
    case HEADER_INPUT_BLUR:
      return state.set("focusd", false);
    case HEADER_HOTBOX_MOUSEIN:
      return state.set("mouseIn", true);
    case HEADER_HOTBOX_MOUSEOUT:
      return state.set("mouseIn", false);
    case HEADER_HOTBOX_LIST:
      //action传过来的数据会自动变为js对象而不是immutable对象，需要手动转为immutable对象
      return state.set("list", fromJS(action.list));
    case HEADER_HOTBOX_PAGE:
      return state.set("page",action.page);
    default:
      return state;
  }
};

export default headerReduces;
