/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-06-30 22:37:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleList\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_ARTICLE_INFO } from "./constants";
import { article_info } from "./actionCreators";

const location = window.location.origin.replace(window.location.port, "");
const baseUrl = location + "8899/api/v1";

const fetchAticleList = (state) =>
  fetch(
    `${baseUrl}/article/info?page=${state.page}&pageSize=${state.pageSize}`
  );

function* get_articleList(state) {
  try {
    const data = yield call(fetchAticleList, state);
    const res = yield data.json();
    yield put(article_info(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* articleListSaga() {
  yield takeEvery(GET_ARTICLE_INFO, get_articleList);
}

export default articleListSaga;
