import React, { Component } from "react";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from "react-router-dom";

function Index() {
  return <h1>hello world</h1>;
}
class App extends Component {
  render() {
    let cookie = document.cookie;
    return (
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/index">
            {cookie.slice("username=".length) !== "" ? (
              <Index></Index>
            ) : (
              <Login></Login>
            )}
          </Route>
          {cookie.slice("username=".length) !== "" ? (
              <Redirect from="/*" to="/index" />
            ) : (
              <Redirect from="/*" to="/login" />
            )}
        </Switch>
      </Router>
    );
  }
}

export default App;
