import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GridLayout from "@/Row-Col";
import { Col, Row, Divider } from "antd";
import "./App.css";
import Home from "@/Home";
import MenuManger from "@/MenuManger";

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
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
