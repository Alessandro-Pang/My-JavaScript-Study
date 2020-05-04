/*
 * @Author: your name
 * @Date: 2020-05-04 19:50:21
 * @LastEditTime: 2020-05-04 23:47:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\reducers\todo.js
 */
import { ADD_TODO, REMOVE_TODO } from "@/action";
export default (state, action) => {
  switch (action.type) {
    case ADD_TODO :
      let id = action.todoId;
      let todo = action.todo;
      //state 使用展开运算符报错：{元素是： undefined,null }
      if (state) {
        return [...state, { id, todo }];
      }
      return [state, { id, todo }];

    case REMOVE_TODO : 
      return state.filter((val) =>{
        if(val){
          return val.id !== action.todoId
        }
      });

    default:
      return state;
  }
};
