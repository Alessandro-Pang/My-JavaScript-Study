/*
 * @Author: your name
 * @Date: 2020-05-06 15:17:57
 * @LastEditTime: 2020-05-06 16:44:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\actions\index.js
 */
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const COUNTERFILTER = "COUNTERFILTER"

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