/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-03 14:17:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\hotArticleList\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import {GET_HOT_ARTICLE_LIST}from "./constants"
import {hot_article_list} from "./actionCreators"
import { api } from "src/utils";

function* get_hotArticleList(){
  const res = yield call (api.fetchHotArticle);
  yield put(hot_article_list(res.data))
}

function* hotArticleSaga() {
  yield takeEvery(GET_HOT_ARTICLE_LIST,get_hotArticleList);
}

export default hotArticleSaga;