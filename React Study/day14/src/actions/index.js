/*
 * @Author: your name
 * @Date: 2020-05-05 22:45:20
 * @LastEditTime: 2020-05-05 23:46:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day14\src\actions\index.js
 */
let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const ToggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}