import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./index";
import Home from "./Home";
import AticlePage from "./article";
import Show404 from "./404"
import IconPicker from "./geticon";
import EditArticle from "./editArticle"
import "antd/dist/antd.css";
import "mditor/dist/css/mditor.min.css";
// import "src/static/iconfont/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/icon" exact component={IconPicker}></Route>
        <Route path="/blog/edit" exact component={EditArticle}></Route>
        <Route Path="/blog/article/:id" exact component={AticlePage}></Route>
        <Route component={Show404}></Route>
      </Switch>
    );
  }
}

export default App;
