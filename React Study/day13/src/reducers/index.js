/*
 * @Author: your name
 * @Date: 2020-05-05 09:01:28
 * @LastEditTime: 2020-05-05 11:57:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day13\src\reducers\index.js
 */
import assign from '@/reducers/assign'

export default assign
 /**
 *Reducer
 *  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
 *  记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
 */

/**
    设计 State 结构
      在 Redux 应用中，所有的 state 都被保存在一个单一对象中。
      建议在写代码前先想一下这个对象的结构。
      如何才能以最简的形式把应用的 state 用对象描述出来？

      以 todo 应用为例，需要保存两种不同的数据：

      当前选中的任务过滤条件；
      完整的任务列表。
      通常，这个 state 树还需要存放其它一些数据，
      以及一些 UI 相关的 state。这样做没问题，但尽量把这些数据与 UI 相关的 state 分开。
  */
/**
 * 处理 Reducer 关系时的注意事项
 * 开发复杂的应用时，不可避免会有一些数据相互引用。
 * 建议你尽可能地把 state 范式化，不存在嵌套。
 * 把所有数据放到一个对象里，每个数据以 ID 为主键，不同实体或列表间通过 ID 相互引用数据。
 * 把应用的 state 想像成数据库。
 * 这种方法在 normalizr 文档里有详细阐述。
 * 例如，实际开发中，在 state 里同时存放
 *    todosById: { id -> todo } 和 todos: array<id> 是比较好的方式
 */
