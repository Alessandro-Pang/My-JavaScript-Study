/*
 * @Author: your name
 * @Date: 2020-05-27 21:12:28
 * @LastEditTime: 2020-05-29 23:58:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\App.js
 */

import React, { Fragment } from "react";
import "./AppStyle.ts";
import {MainWrapper}from "./AppStyle";
import Header from "./containers/header";
import HomePageContent from "./components/HomePageContent";
import HomePageSider from "./components/HomePageSider";

function App() {
  return (
    <Fragment>
      <Header />
      <MainWrapper>
        <HomePageContent></HomePageContent>
        <HomePageSider></HomePageSider>
      </MainWrapper>
    </Fragment>
  );
}

export default App;