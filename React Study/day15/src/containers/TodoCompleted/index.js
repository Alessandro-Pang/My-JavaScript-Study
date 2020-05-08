/*
 * @Author: your name
 * @Date: 2020-05-08 00:19:16
 * @LastEditTime: 2020-05-08 09:01:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\containers\TodoCompleted\index.js
 */

import {connect} from 'react-redux';
import {todo_completed} from 'src/actions';
import TodoList from '@/Todo/TodoList';

// const filters = (filterObj) => filterObj.filter(f => !f)
const filter = f =>{
  //这里改变的是逻辑值，但没有改变 store 中的值，所以返回的不会改变
  //如果想从根本上解决问题，需要改变 store 中的completed 状态
  return !f;
}

const mapStateToProps = state =>{
  return {
    text:"1234566",
    completed:state.todo
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onClickTodo:(completed)=>{
      dispatch(todo_completed(completed));
    }
  }
}

const TodoCompleted = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoCompleted;