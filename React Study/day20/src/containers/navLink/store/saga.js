/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-09 22:22:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\navLink\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_NAV_LINK_LIST } from "./constants";
import { navlink_list } from "./actionCreators";
import { api } from "src/utils";

function* get_navLinkList() {
  try {
    const res = yield call(api.fetchNavLinkList);
    yield put(navlink_list(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* navLinkSaga() {
  yield takeEvery(GET_NAV_LINK_LIST, get_navLinkList);
}

export default navLinkSaga;
