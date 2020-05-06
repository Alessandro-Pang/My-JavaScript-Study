import React, { Component } from "react";
import Counter from "@/Counter";
import Home from '@/Home'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css'
export default class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ol>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
          </ol>
        </nav>
        <hr />
        <div className="centered">
          <Switch>
            <Route exact path="/">
              <Counter></Counter>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
