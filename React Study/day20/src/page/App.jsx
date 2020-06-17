import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom"
import Index from "./Index";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    )
  }
}

export default App;