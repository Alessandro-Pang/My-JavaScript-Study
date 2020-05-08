/*
 * @Author: your name
 * @Date: 2020-05-07 23:22:16
 * @LastEditTime: 2020-05-08 13:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\components\Todo\index.js
 */

import React from 'react'
import TodoCompleted from 'src/containers/TodoCompleted';
import Todo from "src/containers/Todo"

const Todos = () =>{
  return (
    <div>
      <Todo></Todo>
      <TodoCompleted />
    </div>
  )
}

export default Todos