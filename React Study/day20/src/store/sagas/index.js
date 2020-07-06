/*
 * @Author: your name
 * @Date: 2020-06-15 18:56:01
 * @LastEditTime: 2020-07-05 21:52:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\store\sagas\index.js
 */
import { all } from "redux-saga/effects";
import menuSaga from "container/header/store/saga";
import articleListSaga from "container/articleList/store/saga";
import articleInfoSaga from "container/articleContent/store/saga";
import labelTheWallSaga from "container/labelTheWall/store/saga";
import blogFilingSaga from "container/blogFiling/store/saga";
import hotArticleSaga from "container/hotArticleList/store/saga";
import findList from "container/findList/store/saga";

function* rootSagas() {
  yield all([
    menuSaga(),
    articleListSaga(),
    articleInfoSaga(),
    labelTheWallSaga(),
    blogFilingSaga(),
    hotArticleSaga(),
    findList()
  ]);
}

export default rootSagas;
