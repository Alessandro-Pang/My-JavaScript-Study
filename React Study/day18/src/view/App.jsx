import React, { Component } from "react";
import Login from "./Login";
import Index from "./Index"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    let cookie = document.cookie;
    return (
      <Router>
        <Switch>
          <Route path="/(index|login)?">
            {cookie.slice("username=".length) !== "" ? (
              <Index></Index>
            ) : (
              <Login></Login>
            )}
          </Route>
          {/* {cookie.slice("username=".length) !== "" ? (
              <Redirect from="/*" to="/index" />
            ) : (
              <Redirect from="/*" to="/login" />
            )} */}
        </Switch>
      </Router>
    );
  }
}

export default App;
