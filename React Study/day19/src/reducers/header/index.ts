/*
 * @Author: your name
 * @Date: 2020-05-28 23:31:13
 * @LastEditTime: 2020-06-08 13:48:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\header\input_focus.ts
 */

import { fromJS } from "immutable";
import * as constants from "../../actions/constants";
import { Hotbox_actions_type } from "../../actions/actionCreators";
import { headerReduces_type } from "../../actions/types";

const initState = fromJS({
  focusd: false,
  mouseIn: false,
  list: [],
  page: 1
});

// immutable 中 Array 也是 Object 类型（immutable 对象）
const headerReduces = (state = initState, action: Hotbox_actions_type): headerReduces_type => {
  switch (action.type) {
    case constants.HEADER_INPUT_FOCUS:
      return state.set("focusd", true);
    case constants.HEADER_INPUT_BLUR:
      return state.set("focusd", false);
    case constants.HEADER_HOTBOX_MOUSEIN:
      return state.set("mouseIn", true);
    case constants.HEADER_HOTBOX_MOUSEOUT:
      return state.set("mouseIn", false);
    case constants.HEADER_HOTBOX_LIST:
      return state.set("list", fromJS(action.list));
    case constants.HEADER_HOTBOX_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};

export default headerReduces;
