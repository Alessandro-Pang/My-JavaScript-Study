/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-03 14:02:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleContent\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_ARTICLE_INFO } from "./constants";
import { article_info } from "./actionCreators";
import { api} from "src/utils";

function* get_articleInfo(action) {
  try {
    const res = yield call(api.fetchAticleInfoById, action);
    yield put(article_info(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* articleInfoSaga() {
  yield takeEvery(GET_ARTICLE_INFO, get_articleInfo);
}

export default articleInfoSaga;
