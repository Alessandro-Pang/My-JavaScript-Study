/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-03 14:02:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\blogFiling\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_FILING_LIST } from "./constants";
import { filing_list } from "./actionCreators";
import { api }from "src/utils";

function* get_filingList() {
  try {
    const res = yield call(api.fetchFilingList);
    yield put(filing_list(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* BlogFilingSaga() {
  yield takeEvery(GET_FILING_LIST, get_filingList);
}

export default BlogFilingSaga;
