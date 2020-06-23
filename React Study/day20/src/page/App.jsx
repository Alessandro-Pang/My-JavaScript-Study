import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./index";
import Home from "./Home";
import AticlePage from "./article";
import Show404 from "./404"
import IconPicker from "./geticon";
import "antd/dist/antd.css";
import "src/static/iconfont/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route Path="/home/article/:id" exact component={AticlePage}></Route>
        <Route path="/icon" exact component={IconPicker}></Route>
        <Route component={Show404}></Route>
      </Switch>
    );
  }
}

export default App;
