import React, { Component } from "react";
import Counter from "@/Counter";
import Home from '@/Home'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {centered,nav} from './App.css'
import Precss from '@/Precss';
import Todos from '@/Todo'
export default class App extends Component {
  render() {
    return (
      <Router>
        <nav className={nav}>
          <ol>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Precss">Precss</Link>
            </li>
            <li>
              <Link to="/Todos">Todos</Link>
            </li>
          </ol>
        </nav>
        <hr />
        <div className={centered} >
          <Switch>
            <Route exact path="/">
              <Counter></Counter>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/Precss">
              <Precss></Precss>
            </Route>
            <Route path="/Todos">
              {/* <Todos></Todos> */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
