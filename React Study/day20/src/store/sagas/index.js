/*
 * @Author: your name
 * @Date: 2020-06-15 18:56:01
 * @LastEditTime: 2020-06-30 10:57:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\store\sagas\index.js
 */
import {all}from "redux-saga/effects"
import menuSaga from "container/header/store/saga";
import articleListSaga from "container/articleList/store/saga"
function* rootSagas(){
  yield all([
    menuSaga(),
    articleListSaga()
  ])
}

export default rootSagas;
