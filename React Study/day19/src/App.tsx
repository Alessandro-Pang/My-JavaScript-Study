/*
 * @Author: your name
 * @Date: 2020-05-27 21:12:28
 * @LastEditTime: 2020-06-01 23:39:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\App.js
 */

import React, { Fragment,useState ,useEffect } from "react";
import "./AppStyle.ts";
import {MainWrapper,CallbackTop}from "./AppStyle";
import Header from "./containers/header";
import HomePageContent from "./components/HomePageContent";
import HomePageSider from "./components/HomePageSider";

function App() {

  const [showCallTop , setShowCallTop] = useState(false);

  const handleScroll = () =>{
    let docScrollTop = document.documentElement.scrollTop;
    if(docScrollTop > 100 ){
      setShowCallTop(true)
    }else{
      setShowCallTop(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll,true)
  })

  const goScrollTop = () =>{
    document.documentElement.scrollTop = 0;
  }

  return (
    <Fragment>
      <Header />
      <MainWrapper>
        <HomePageContent></HomePageContent>
        <HomePageSider></HomePageSider>
        {showCallTop ? <CallbackTop onClick={goScrollTop}>^</CallbackTop> : ''}
      </MainWrapper>
    </Fragment>
  );
}
//calc(123 + 70vw)
export default App;