/*
 * @Author: your name
 * @Date: 2020-05-08 22:22:42
 * @LastEditTime: 2020-05-08 22:35:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day16\src\reducers\temp.js
 */
import {ADD} from 'src/actions'
export default (state=0,action) => {
  if(action.type === ADD){
    return state+1
  }else{
    return state
  }
}