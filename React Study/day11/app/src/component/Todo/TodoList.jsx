import React, { Component } from 'react'
import PropTypes from "prop-types";
import Todo from "@/Todo/Todo";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo,index)=>(
          <Todo key={index} {...todo} onClick={()=>this.props.onTodoClick(index)}></Todo>
        ))}
      </ul>
    )
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;