/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-06-28 00:00:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\header\store\saga.js
 */

import { takeEvery, put } from "redux-saga/effects";
import { GET_MENU_INFO } from "./constants";
import { menu_info } from "./actionCreators";
const baseUrl = "http://127.0.0.1:8899/api/v1/menu";

function* get_menus() {
  const data = yield fetch(`${baseUrl}/info`);
  const res = yield data.json((res) => res.json());
  yield put(menu_info(res.data));
}

function* menuSaga() {
  yield takeEvery(GET_MENU_INFO, get_menus);
}

export default menuSaga;
