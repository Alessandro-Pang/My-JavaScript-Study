/*
 * @Author: your name
 * @Date: 2020-06-09 14:40:35
 * @LastEditTime: 2020-06-09 22:46:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\article\index.ts
 */ 
import { ARTICLE_ONCTNET } from '../../actions/constants';
import { article_info_type } from "../../actions/actionCreators"
import { articleReducer_type } from "../../actions/types";
import { fromJS } from 'immutable';

const initState = fromJS({
  content:''
})
const articleReducer = (state=initState,action:article_info_type):articleReducer_type=>{
  switch(action.type){
    case ARTICLE_ONCTNET:
      return state.set("content",action.content)
    default:
      return state;
  }
}

export default articleReducer;