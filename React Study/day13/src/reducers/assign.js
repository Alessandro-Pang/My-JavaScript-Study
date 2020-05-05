/*
 * @Author: your name
 * @Date: 2020-05-05 11:55:45
 * @LastEditTime: 2020-05-05 12:03:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\src\reducers\assign.js
 */
import { ADD_TODO, REMOVE_TODO, TODO_STATE } from "@/action";
/**
 * 编写 reducer，并让它来处理之前定义过的 action。
 *  我们将以指定 state 的初始状态作为开始。
 *  Redux 首次执行时，state 为 undefined，此时我们可借机设置并返回应用的初始 state。
 */
// const initlialState = [];
const initlialState = {
  showState: TODO_STATE.SHOW_ALL,
  todos: [],
};

export default function (state = initlialState, action) {
  switch (action.type) {
    case TODO_STATE:
      return Object.assign({}, state, {
        showState: action.newState,
      });
    case ADD_TODO :
      // return [...state, action.todo];
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            todos: action.todo,
          },
        ],
      });

    case REMOVE_TODO :
      console.log(state);
      return Object.assign({}, state, {
        todos: state.todos.filter((val, index) => index !== action.todoId),
      });
 
    default:
      return state;
  }
}