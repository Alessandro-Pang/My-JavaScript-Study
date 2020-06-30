/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-06-30 08:40:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleList\store\saga.js
 */

import { takeEvery, put } from "redux-saga/effects";
import { GET_ARTICLE_INFO } from "./constants";
import { article_info } from "./actionCreators";

const location = window.location.origin.replace(window.location.port,"");
const baseUrl = location+"8899/api/v1";

function* get_articleList(page,pageSize) {
  // const data = yield fetch(`${baseUrl}/article/info?page=${page}&pageSize=${pageSize}`);
  const res = yield data.json((res) => res.json());
  yield put(article_info(res.data));
}

function* articleListSaga() {
  yield takeEvery(GET_ARTICLE_INFO, get_articleList);
}

export default articleListSaga;
