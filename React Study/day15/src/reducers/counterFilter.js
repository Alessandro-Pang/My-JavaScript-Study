/*
 * @Author: your name
 * @Date: 2020-05-06 16:51:20
 * @LastEditTime: 2020-05-06 17:05:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\reducers\counterFilter.js
 */
import {ADD,COUNTERFILTER} from 'src/actions';

const counterFilter = (state = ADD,action) =>{
  switch (action.type){
    case COUNTERFILTER:
      return action.filter;
    
    default :
      return state;
  }
}

export default counterFilter;