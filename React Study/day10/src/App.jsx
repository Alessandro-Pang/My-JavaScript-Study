import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";
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
              <Link to="/javascript">Javascript</Link>
            </li>
            <li>
              <Link to="/java">JAVA</Link>
            </li>
            <li>
              <Link to="/nodejs">NodeJS</Link>
            </li>
            <li>
              <Link to="/typescrpt">Typescript</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/:type" exact children={ <Home /> }></Route>
        </Switch>
       
        {/* <Route path="/Javascript" component={Home}></Route>
        <Route path="/JAVA" component={Home}></Route>
        <Route path="/NodeJS" component={Home}></Route>
        <Route path="/Typescript" component={Home}></Route> */}
      </Router>
    );
  }
}

export default App;
