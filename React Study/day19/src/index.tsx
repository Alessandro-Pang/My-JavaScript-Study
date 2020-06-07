/*
 * @Author: your name
 * @Date: 2020-05-27 21:12:28
 * @LastEditTime: 2020-06-06 18:30:29
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

// PWA progressive web application
// 部署在 https协议的服务器上
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import thunk from  "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store:any = createStore(reducers, enhancer);

// store.subscribe(()=>{
//   console.log(store.getState().headerReduces.get("page"))
// })
/**
 * create-react-app --typescript: 
 *    Cannot compile namespaces when the '--isolatedModules' flag is provided
 * 
 * 1. you file is ts ,but update to tsx
 *  tsconfig.json
 * 
 *  "exclude": [
 *    "node_modules",
 *    "\*\*\/*.spec.ts",
 *    "src/sw-*.js",
 *    "src/idb.js"
 *  ]
 * 
 * 2. you import tsx,but you this file is ts;
 * 
 * 3. you import moudle not export;
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
