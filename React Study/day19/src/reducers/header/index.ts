/*
 * @Author: your name
 * @Date: 2020-05-28 23:31:13
 * @LastEditTime: 2020-05-29 09:58:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\header\input_focus.ts
 */

import {fromJS} from "immutable";
import { HEADER_INPUT_FOCUS,HEADER_INPUT_BLUR } from "../../actions/constants";

//使用immutable 这里不可以设置为 object
const initState:any = fromJS({
  focusd: false
})

const inputFocus = (state = initState, action: any) => {
  switch (action.type) {
    case HEADER_INPUT_FOCUS:
      return state.set('focusd',true);
    case HEADER_INPUT_BLUR:
      return state.set('focusd',false)
    default:
      return state;
  }
}

export default inputFocus;