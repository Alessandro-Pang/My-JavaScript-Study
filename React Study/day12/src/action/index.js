/*
 * @Author: your name
 * @Date: 2020-05-04 16:32:30
 * @LastEditTime: 2020-05-04 23:21:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\action\index.js
 */
/***
 * action 
 * 首先，让我们来给 action 下个定义。
 * Action 是把数据从应用（这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据）传到 store 的有效载荷。
 * 它是 store 数据的唯一来源。
 * 一般来说你会通过 store.dispatch() 将 action 传到 store。
 */
/**
 * Action 本质上是 JavaScript 普通对象。
 * 我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。
 * 多数情况下，type 会被定义成字符串常量。
 * 当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
 */
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const QUERY_TODO = "QUERY_TODO"
/**
 * Action 创建函数
 * Action 创建函数 就是生成 action 的方法。
 * “action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。
 * 在 Redux 中的 action 创建函数只是简单的返回一个 action
 * 
 * @param {*} todo 
 * @param {*} todoId 
 */
export const add_todo = (todo,todoId)=>({
  type:ADD_TODO,
  todo,
  todoId
})
export const remove_todo = (todoId)=>({
  type:REMOVE_TODO,
  todoId
})


/**
 * 样板文件使用提醒
 *  使用单独的模块或文件来定义 action type 常量并不是必须的，甚至根本不需要定义。
 * 对于小应用来说，使用字符串做 action type 更方便些。
 * 不过，在大型应用中把它们显式地定义成常量还是利大于弊的。
 */