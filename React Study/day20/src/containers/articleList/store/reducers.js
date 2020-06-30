/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:17:46
 * @LastEditTime: 2020-06-30 08:25:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\containers\articleList\store\reducers.js
 */ 

import  {ARTICLE_INFO,SET_PAGE_OFFSET_NUM,SET_PAGE_SIZE_NUM,PAGE_NUMBER} from "./constants";

const initState = {
  articleList:[],
  offset:0,
  pagesize:10,
  page:1
}

const ArticleListReducers= (state=initState,action) =>{
  switch(action.type){
    case ARTICLE_INFO:
      return {...state ,articleList:action.articleList};
    case SET_PAGE_OFFSET_NUM:
      return {...state,offset:action.offset};
    case SET_PAGE_SIZE_NUM:
      return {...state,pagesize:action.pagesize};
    case PAGE_NUMBER :
      return {...state,page:action.page}
    default:
      return state
  }
}

export default ArticleListReducers ;
