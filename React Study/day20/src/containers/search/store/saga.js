/*
 * @Author: your name
 * @Date: 2020-06-15 13:38:07
 * @LastEditTime: 2020-07-09 22:21:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\search\store\saga.js
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_SEARCH_LIST } from "./constants";
import { search_list } from "./actionCreators";
import { api } from "src/utils";

function* get_searchList(action) {
  const search = {
    typename:'search',
    typeValue:action.searchText.value
  }
  try {
    const res = yield call(api.fetchFindArticleList,search);
    yield put(search_list(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* SearchListSaga() {
  yield takeEvery(GET_SEARCH_LIST, get_searchList);
}

export default SearchListSaga;
