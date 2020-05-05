/*
 * @Author: your name
 * @Date: 2020-05-05 11:59:42
 * @LastEditTime: 2020-05-05 12:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\src\reducers\expand.js
 */
import {combineReducers} from 'redux'
import {ADD_TODO,REMOVE_TODO,TODO_STATE} from '@/action';

function todos (state =[],action){
  switch (action.type) {
    case ADD_TODO :
      return [...state,action.todo];

    case REMOVE_TODO : 
      return state.filter ((val,index)=>index !== action.todoId)

    default:
      return state;
  }
}

const { SHOW_ALL} = TODO_STATE
function todoState (state=[SHOW_ALL],action){
  switch (action.type) {
    case TODO_STATE :
      return [...state,action.newState];

    default:
      return state;
  }
}

/**
 * combineReducers() 所做的只是生成一个函数，
 *  这个函数来调用你的一系列 reducer，
 * 每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，
 * 然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
 * 正如其他 reducers，如果 combineReducers() 中包含的所有 reducers 都没有更改 state，那么也就不会创建一个新的对象。
 */

const todoApp = combineReducers({
  todoState,
  todos
})

export default todoApp