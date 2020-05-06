/*
 * @Author: your name
 * @Date: 2020-05-05 22:13:25
 * @LastEditTime: 2020-05-05 23:53:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day14\src\containers\VisibleTodoList\index.js
 */
import {connect} from 'react-redux';
import {ToggleTodo} from '@src/actions';
import TodoList from '@/Todo/TodoList';

const getVisibleTodos = (todos,filter)=>{
  switch (filter) {
    case "SHOW_ALL":
      return todos;

    case "SHOW_ACTIVE":
      return todos.filter(t=>!t.completed)
     
    case "SHOW_COMPLETED":
      return todos.filter(t=>t.completed)
  }
}

const mapStateToProps = state =>{
  return {
    todos:getVisibleTodos(state.todos,state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onTodoClick:id=>{
      dispatch(ToggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;