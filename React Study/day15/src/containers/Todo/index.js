/*
 * @Author: your name
 * @Date: 2020-05-08 12:50:44
 * @LastEditTime: 2020-05-08 13:29:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\containers\Todo\index.js
 */
import {connect} from 'react-redux';
import {add_todo,ADD_TODO} from 'src/actions';
import AddTodo from '@/Todo/AddTodo';

const mapStateToProps = (state) =>{
  return state
}

const mapDispatchToProps = dispatch =>{
  return {
    onClickAddTodo:(props)=>{dispatch(add_todo(props))}
  }
}

let Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default Todo