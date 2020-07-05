/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-03 14:03:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\labelTheWall\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_TAG_LIST } from "./constants";
import { tag_list } from "./actionCreators";
import { api } from "src/utils";

function* get_tagList() {
  try {
    const res = yield call(api.fetchTagList);
    yield put(tag_list(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* labelTheWallSaga() {
  yield takeEvery(GET_TAG_LIST, get_tagList);
}

export default labelTheWallSaga;
