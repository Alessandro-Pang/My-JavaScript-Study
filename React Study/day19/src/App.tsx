/*
 * @Author: your name
 * @Date: 2020-05-27 21:12:28
 * @LastEditTime: 2020-06-06 12:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\App.js
 */

import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./AppStyle.ts";
import { MainWrapper, CallbackTop } from "./AppStyle";
import Header from "./containers/header";
import HomePageContent from "./containers/content";
import HomePageSider from "./components/HomePageSider";
import LoginRegister from "./containers/LoginRegister";
function App() {
  const [showCallTop, setShowCallTop] = useState(false);

  const handleScroll = () => {
    let docScrollTop = document.documentElement.scrollTop;
    if (docScrollTop > 100) {
      setShowCallTop(true);
    } else {
      setShowCallTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });

  const goScrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Header />
          <MainWrapper>
            <HomePageContent></HomePageContent>
            <HomePageSider></HomePageSider>
            {showCallTop ? (
              <CallbackTop onClick={goScrollTop}>^</CallbackTop>
            ) : (
              ""
            )}
          </MainWrapper>
        </Route>
        <Route path="/login-register">
          <LoginRegister></LoginRegister>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
