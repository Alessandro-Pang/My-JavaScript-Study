/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-03 00:01:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleList\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_ARTICLE_INFO } from "./constants";
import { article_info } from "./actionCreators";
import {fetchAticleList}from "src/utils/api"

function* get_articleList(action) {
  try {
    const res = yield call(fetchAticleList, action);
    yield put(article_info(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* articleListSaga() {
  yield takeEvery(GET_ARTICLE_INFO, get_articleList);
}

export default articleListSaga;
