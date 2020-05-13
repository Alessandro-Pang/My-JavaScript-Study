import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Divider } from "antd";
import "./App.css";
import Home from "@/Home";
import GridLayout from "@/Row-Col";
import MenuManger from "@/MenuManger";
import Menu2 from '@/Menu2'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MenuManger">MenuManger</Link>
              </li>
              <li>
                <Link to="/GridLayout">GridLayout</Link>
              </li>
              <li>
                <Link to="/Menu2">Menu2</Link>
              </li>
            </ul>
          </nav>
          <Divider style={{ margin: "10px 0" }} />
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/MenuManger">
              <MenuManger></MenuManger>
            </Route>
            <Route path="/GridLayout">
              <GridLayout></GridLayout>
            </Route>
            <Route path="/Menu2">
              <Menu2></Menu2>
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
