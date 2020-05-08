/*
 * @Author: your name
 * @Date: 2020-05-08 00:06:32
 * @LastEditTime: 2020-05-08 09:00:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\reducers\todo.js
 */
import {ADD_TODO,COMPELETED} from 'src/actions';

export default function(state=[],action){
  switch (action.type){
    case ADD_TODO :
      return [...state,action.todo]
    
    case COMPELETED:
      return action.completed ? false :true;

    default:
      return state;
  }
}