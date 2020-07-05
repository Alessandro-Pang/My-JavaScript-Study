/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-03 14:12:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\header\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_MENU_INFO } from "./constants";
import { menu_info } from "./actionCreators";
import { api } from "src/utils";

//pc 端正常访问 ，移动端报typeerror:failed to fetch --> 地址访问127.0.0.1 --> X
function* get_menus() {
  const res = yield call(api.fetchMenuInfo);
  let action;
  if(res.code === 200){
    action = yield menu_info(res.data);
  }
  yield put(action);
}

function* menuSaga() {
  yield takeEvery(GET_MENU_INFO, get_menus);
}

export default menuSaga;
