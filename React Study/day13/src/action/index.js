/*
 * @Author: your name
 * @Date: 2020-05-05 09:01:19
 * @LastEditTime: 2020-05-05 12:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\src\action\index.js
 */

//描述 state 操作
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TODO_STATE = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_SMALL: "SHOW_SMALL",
  SHOW_SCRNNER: "SHOW_SCRNNER",
};

export function add_todo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function remove_todo(todoId) {
  return {
    type: REMOVE_TODO,
    todoId,
  };
}

export function set_todo_state(newState){
  return {
    type:TODO_STATE,
    newState
  }
}
