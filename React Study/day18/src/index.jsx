import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./view/App";
import reducers from "src/reducers";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
// );

// console.log(enhancer)


let store = createStore(reducers);

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
