/*
 * @Author: your name
 * @Date: 2020-05-08 00:06:32
 * @LastEditTime: 2020-05-08 13:48:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\reducers\todo.js
 */
import {ADD_TODO,COMPELETED} from 'src/actions';

const initreducers = [{
  todo:[],
  completed:''
}]

export default function(state=initreducers,action){
  switch (action.type){
    case ADD_TODO :
      console.log(action.todo)
      return [...state,{todo:action.todo}]

    case COMPELETED:
      return [...state, {completed : action.completed ? false : true}]

    default:
      return state;
  }
}