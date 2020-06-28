/*
 * @Author: your name
 * @Date: 2020-06-15 12:10:59
 * @LastEditTime: 2020-06-25 18:08:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\index.jsx
 */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//1.import redux-saga
import createSageMiddleWare from "redux-saga";
// import saga from "./page/Home/store/saga";
import reducers from "./store/reducers";
import "src/index.less";
import sagas from "./store/sagas";
import App from "src/page/App";

//2.create reduxSag middleware
const sagaMiddleWare = createSageMiddleWare();
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleWare));

const store = createStore(reducers, enhancer);

//3.run saga middleware
sagaMiddleWare.run(sagas);

render(
    <Provider store={store}>
      <Router>
        <App></App>
      </Router>
    </Provider>,
  document.getElementById("root")
);
