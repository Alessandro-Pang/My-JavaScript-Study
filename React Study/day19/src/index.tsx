/*
 * @Author: your name
 * @Date: 2020-05-27 21:12:28
 * @LastEditTime: 2020-06-05 22:08:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IcontFont } from "./static/iconfont/iconfont";
import App from "./App";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import thunk from  "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store:any = createStore(reducers, enhancer);
/**
 * create-react-app --typescript: 
 *    Cannot compile namespaces when the '--isolatedModules' flag is provided
 * 
 * tsconfig.json
 * 
 *"exclude": [
 *  "node_modules",
 *  "\*\*\/*.spec.ts",
 *    "src/sw-*.js",
 *    "src/idb.js"
 * ]
 */
ReactDOM.render(
  // React.StrictMode -- 严格模式
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* 公共全局标签必须是自闭标签 */}
        <IcontFont />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
