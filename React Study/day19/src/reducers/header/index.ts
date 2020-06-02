/*
 * @Author: your name
 * @Date: 2020-05-28 23:31:13
 * @LastEditTime: 2020-06-01 23:38:20
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
} from "../../actions/constants";

//使用immutable 这里不可以设置为 object
const initState: any = fromJS({
  focusd: false,
  mouseIn: false,
  list: [],
});

const inputFocus = (state = initState, action: any) => {
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
      return state.set("list", action.list);
    default:
      return state;
  }
};

export default inputFocus;
