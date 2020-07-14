/*
 * @Author: your name
 * @Date: 2020-06-15 13:28:25
 * @LastEditTime: 2020-07-07 11:58:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\store\reducers\index.js
 */

import { combineReducers } from "redux";
import Header from "container/header/store/reducers";
import ArticleList from "container/articleList/store/reducers"
import ArticleContent from "container/articleContent/store/reducers"
import LabelTheWall from "container/labelTheWall/store/reducers"
import BlogFiling from "container/blogFiling/store/reducers"
import HotArticleList from "container/hotArticleList/store/reducers"
import FindArticleList from "container/findList/store/reducers"
import NavLinkList from "container/navLink/store/reducers"
import Search from "container/search/store/reducers"

const Reducers = combineReducers({
  Header,
  ArticleList,
  ArticleContent,
  LabelTheWall,
  BlogFiling,
  HotArticleList,
  FindArticleList,
  NavLinkList,
  Search
});

export default Reducers;
