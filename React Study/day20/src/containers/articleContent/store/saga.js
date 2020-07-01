/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-01 22:25:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleContent\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_ARTICLE_INFO } from "./constants";
import { article_info } from "./actionCreators";

const location = window.location.origin.replace(window.location.port, "");
const baseUrl = location + "8899/api/v1";

const fetchAticleInfoById = (action) =>
  fetch(
    `${baseUrl}/article/find?article_id=${action.article_id}`
  );

function* get_articleInfo(action) {
  try {
    const data = yield call(fetchAticleInfoById, action);
    const res = yield data.json();
    yield put(article_info(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* articleInfoSaga() {
  yield takeEvery(GET_ARTICLE_INFO, get_articleInfo);
}

export default articleInfoSaga;
