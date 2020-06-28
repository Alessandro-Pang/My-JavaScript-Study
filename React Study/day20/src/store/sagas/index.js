/*
 * @Author: your name
 * @Date: 2020-06-15 18:56:01
 * @LastEditTime: 2020-06-27 23:29:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\store\sagas\index.js
 */
import {all}from "redux-saga/effects"
import menuSaga from "container/header/store/saga";

function* rootSagas(){
  yield all([
    menuSaga()
  ])
}

export default rootSagas;
