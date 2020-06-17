/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-06-15 19:01:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\page\Home\store\saga.js
 */

import { takeEvery, put } from "redux-saga/effects";
import { GET_USER_INFO } from "./constants";
import { user_info } from "./actionCreators";
const baseUrl = "http://127.0.0.1:3300/db";

function* get_users() {
  const data = yield fetch(`${baseUrl}/menu_name`);
  const res = yield data.json((res) => res.json());

  yield put(user_info(res));
}

function* mySaga() {
  yield takeEvery(GET_USER_INFO, get_users);
}

export {mySaga};
