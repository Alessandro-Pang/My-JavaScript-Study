import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "src/reducers";
import App from "@/App";

let store = createStore(reducers);
store.subscribe(()=>{
  console.log(store.getState())
})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
