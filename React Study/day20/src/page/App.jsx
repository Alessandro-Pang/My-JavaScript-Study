import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom"
import Index from "./index";
import Home from "./Home";
import IconPicker from './geticon'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/icon" component={IconPicker}></Route>
      </Switch>
    )
  }
}

export default App;