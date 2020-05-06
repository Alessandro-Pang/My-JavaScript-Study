/*
 * @Author: your name
 * @Date: 2020-04-30 19:58:48
 * @LastEditTime: 2020-05-05 20:03:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day11\app\src\index.js
 */
import React from "react";
import {render} from "react-dom";
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)