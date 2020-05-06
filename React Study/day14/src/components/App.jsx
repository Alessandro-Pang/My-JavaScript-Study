import React, { Component } from 'react';
import AddTodo from "@src/containers/AddTodos"
import VisibleTodoList  from '@src/containers/VisibleTodoList'
import Footer from "@/Todo/Footer";

/**
 * components 组件层只负责展示，接收 props 参数
 * contrainers 容器层 负责把展示组件连接到 Redux
 */
const App = ()=>(
      <div>
        <AddTodo />
          <VisibleTodoList />
        <Footer />
      </div>
    );

export default App;
