/*
 * @Author: your name
 * @Date: 2020-05-27 21:12:28
 * @LastEditTime: 2020-06-09 13:31:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\App.js
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component"

const Home = loadable(() => import("./page/Home"));
const LoginRegister = loadable(() => import("./page/LoginRegister"));
const ArticlePage = loadable(() => import("./page/ArticlePage"))

function App() {
  return (
    <Switch>
      <Route path="(/|/home)" exact>
        <Home />
      </Route>
      <Route path="/login-register">
        <LoginRegister />
      </Route>
      <Route path="/home/article/:id">
        <ArticlePage />
      </Route>
    </Switch>
  );
}

export default App;
