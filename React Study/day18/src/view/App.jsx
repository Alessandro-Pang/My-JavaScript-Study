import React, { Component } from "react";
import Login from "./Login";
import Index from "./Index";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const location = history.location;

// 监听当前 location改变
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});

//使用push、replace和go导航
history.push("/Sys_menu");

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/(index|Login)?">
            {document.cookie.substring(8) === "true" ? (
              <Index></Index>
            ) : (
              <Login></Login>
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
