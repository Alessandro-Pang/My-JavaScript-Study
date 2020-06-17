/*
 * @Author: your name
 * @Date: 2020-06-15 18:56:01
 * @LastEditTime: 2020-06-15 20:05:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\store\sagas\index.js
 */
import {all}from "redux-saga/effects"
import { saga } from "../../containers/home/store";

function* rootSagas(){
  yield all([
    saga.mySaga()
  ])
}

export default rootSagas;
