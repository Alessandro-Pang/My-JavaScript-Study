/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-05 23:34:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\findList\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_FINDARTICLE_LIST } from "./constants";
import { findArticle } from "./actionCreators";
import { api } from "src/utils";

function* get_findArticleList(action) {
  try {
    const res = yield call(api.fetchFindArticleList, action);
    yield put(findArticle(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* findArticleSaga() {
  yield takeEvery(GET_FINDARTICLE_LIST, get_findArticleList);
}

export default findArticleSaga;
