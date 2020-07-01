/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-01 22:25:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\blogFiling\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_FILING_LIST } from "./constants";
import { filing_list } from "./actionCreators";

const location = window.location.origin.replace(window.location.port, "");
const baseUrl = location + "8899/api/v1";

const fetchFilingList = () => fetch(`${baseUrl}/article/findFiling`);

function* get_filingList() {
  try {
    const data = yield call(fetchFilingList);
    const res = yield data.json();
    yield put(filing_list(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* BlogFilingSaga() {
  yield takeEvery(GET_FILING_LIST, get_filingList);
}

export default BlogFilingSaga;
