import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "@/App.css";
import Home from "@/Home";
import NodeJS from "@/NodeJS";
import Git from "@/Git";
import GitHub from "@/GitHub";
import Me from "@/Me";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <div id="loading"></div> */}
        <Router>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/NodeJS">NodeJS</Link>
            </li>
            <li>
              <Link to="/Git">Git</Link>
            </li>
            <li>
              <Link to="/GitHub">GitHub</Link>
            </li>
            <li>
              <Link to="/Me">Me</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/NodeJS">
              <NodeJS></NodeJS>
            </Route>
            <Route path="/Git">
              <Git></Git>
            </Route>
            <Route path="/GitHub">
              <GitHub></GitHub>
            </Route>
            <Route path="/Me">
              <Me></Me>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
