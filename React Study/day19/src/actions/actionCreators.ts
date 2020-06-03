/*
 * @Author: your name
 * @Date: 2020-05-28 23:24:12
 * @LastEditTime: 2020-06-02 23:50:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\actions\actionCreators.ts
 */

import {
  HEADER_INPUT_FOCUS,
  HEADER_INPUT_BLUR,
  HEADER_HOTBOX_MOUSEIN,
  HEADER_HOTBOX_MOUSEOUT,
  HEADER_HOTBOX_LIST,
  HEADER_HOTBOX_PAGE,
} from "./constants";

export const input_focus = (focusd: boolean) => ({
  type: HEADER_INPUT_FOCUS,
  focusd,
});

export const input_blur = (focusd: boolean) => ({
  type: HEADER_INPUT_BLUR,
  focusd,
});

export const hotbox_mouseIn = (mouseIn: boolean) => ({
  type: HEADER_HOTBOX_MOUSEIN,
  mouseIn,
});

export const hotbox_mouseOut = (mouseIn: boolean) => ({
  type: HEADER_HOTBOX_MOUSEOUT,
  mouseIn,
});

const hotbox_list = (list: object) => ({
  type: HEADER_HOTBOX_LIST,
  list,
});

export const get_hotbox_list = () => (dispatch: any) => {
  fetch("http://127.0.0.1:3300/db/hot_list")
    .then((res) => res.json())
    .then((res) => {
      dispatch(hotbox_list(res.data));
    });
};

export const get_hotbox_page = (page: number) => ({
  type: HEADER_HOTBOX_PAGE,
  page,
});
