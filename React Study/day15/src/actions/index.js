/*
 * @Author: your name
 * @Date: 2020-05-06 15:17:57
 * @LastEditTime: 2020-05-08 08:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\actions\index.js
 */
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const COUNTERFILTER = "COUNTERFILTER";
export const ADD_TODO = "ADD_TODO";
export const COMPELETED = "COMPELETED";

export const add = addNumber =>({
  type:ADD,
  addNumber
})

export const substract = subNumber => ({
  type:SUBTRACT,
  subNumber
})

export const counterFilter = filter =>({
  type :COUNTERFILTER,
  filter
})

export const add_todo = todo => ({
  type:ADD_TODO,
  todo
})

export const todo_completed = completed =>({
  type:COMPELETED,
  completed
})