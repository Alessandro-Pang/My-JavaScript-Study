import React from "react";
import Todo from "@/Todo/Todo";

const TodoList = (props) => {
  return (
    <ul>
      <Todo
        onClick={()=>props.onClickTodo(props.completed)}
        completed={props.completed}
        text={props.text}
      ></Todo>
    </ul>
  );
};

export default TodoList;
