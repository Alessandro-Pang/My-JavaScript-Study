import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "@/App";
import reducers from "src/reducers";
import 'antd/dist/antd.css';


/* stroe */
const store = createStore(reducers);
/**
 * Redux
 * Saga
 * Chunk
 * immutable
 * Mobx 
 * Stamen --Mobx 出品
 * 
 * dva  --基于redux实现方案
 * 
 * -------
 * loadsh
 */
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);