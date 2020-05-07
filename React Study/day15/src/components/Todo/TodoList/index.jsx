import React from 'react';
import Todo from '@/Todo/Todo';

const TodoList = props =>{
  return (
    <ul>
      {/* <Todo onClick={()=>{}} completed={true} text="1111"></Todo>
      <Todo onClick={()=>{}} completed={false}text="3333333"></Todo>
      <Todo onClick={()=>{}} completed={true} text="1111"></Todo> */}

      <Todo onClick={props.onClickTodo} completed={props.completed?true:false} text={props.text}></Todo>
    </ul>
  )
}

export default TodoList;