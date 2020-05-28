import React, { Component } from "react";
import Login from "./Login";
import Index from "./Index";
import {
  Route,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <Switch>
        <Route path="/(index|Login)?">
          {document.cookie.substring(8) === "true" ? (
            <Index></Index>
          ) : (
            <Login></Login>
          )}
        </Route>
      // </Switch>
    );
  }
}

export default App;
