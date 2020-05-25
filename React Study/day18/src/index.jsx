import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./view/App";
import reducers from "src/reducers";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import {GetMenuList} from "src/actions"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store = createStore(reducers,enhancer);

store.dispatch(GetMenuList())
store.subscribe(()=>{
  console.log(store.getState())
})

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);