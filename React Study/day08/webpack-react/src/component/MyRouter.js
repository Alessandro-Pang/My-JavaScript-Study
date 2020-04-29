/*
 * @Author: your name
 * @Date: 2020-04-27 21:58:43
 * @LastEditTime: 2020-04-28 12:43:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day08\webpack-react\src\component\router.js
 */
import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import Header from "./Header";
import HookStudy from "./HookStudy";

const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);
export default class MyRouter extends React.Component {
  constructor() {
    super();
  }
  render() {
    /**
      优点：优雅，可传对象
      缺点：刷新页面，参数丢失
     */
    const path = {
      pathname: "/Header",
      query: "通过query传递message参数",
    };
    return (
      <Router history={history}>
        <div className="App">
          <Link to="/">Home</Link> 
          &nbsp; 
          <Link to={path}>Header</Link> 
          &nbsp; 
          <Link to="/HookStudy">HookStudy</Link> 
          <hr />
          <Route path="/" exact component={Home}></Route>
          <Route path="/Header" component={Header}></Route>
          <Route path="/HookStudy" component={HookStudy}></Route>
        </div>
      </Router>
    );
  }
}
