import React, { Component } from "react";
import Login from "./Login";
import Index from "./Index";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

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
