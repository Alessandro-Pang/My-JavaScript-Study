import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";

class App extends Component {
  render() {
    const JSpath = {
      pathname: "/Javascript",
      query: "Javascript",
    };

    const JAVApath = {
      pathname: "/JAVA",
      query: "java",
    };

    const Nodepath = {
      pathname: "/NodeJS",
      query: "nodejs",
    };

    const TSpath = {
      pathname: "/Typescript",
      query: "Typescript",
    };
    return (
      <Router>
        <nav className="nav-router">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={JSpath}>Javascript</Link>
            </li>
            <li>
              <Link to={JAVApath}>JAVA</Link>
            </li>
            <li>
              <Link to={Nodepath}>NodeJS</Link>
            </li>
            <li>
              <Link to={TSpath}>Typescript</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Route path="/" exact component={Home}></Route>
        <Route path="/Javascript" exact component={Home}></Route>
        <Route path="/JAVA" exact component={Home}></Route>
        <Route path="/NodeJS" exact component={Home}></Route>
        <Route path="/Typescript" exact component={Home}></Route>
      </Router>
    );
  }
}

export default App;
