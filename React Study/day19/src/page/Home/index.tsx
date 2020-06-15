/*
 * @Author: your name
 * @Date: 2020-05-27 21:12:28
 * @LastEditTime: 2020-06-13 11:01:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\App.js
 */

import React, { Fragment, useState,useEffect } from "react";

import Header from "../../containers/header";
import HomePageContent from "../../containers/content";
import HomePageSider from "../../components/HomePageSider";
import { MainWrapper, CallbackTop } from './style';

const Home = () => {
  const [showCallTop, setShowCallTop] = useState(false);
  
  const handleScroll = () => {
    let docScrollTop = document.documentElement.scrollTop;
    if (docScrollTop > 100) {
      setShowCallTop(true);
    } else {
      setShowCallTop(false);
    }
  };

  const goScrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(()=>{
    /**
     *  	参数三：指定移除事件句柄的阶段。
     *         true - 在捕获阶段移除事件句柄
     *         false- 默认。在冒泡阶段移除事件句柄
     *     注意: 如果添加两次事件句柄，一次在捕获阶段，一次在冒泡阶段，你必须单独移除该事件。 
     */
    window.addEventListener("scroll", handleScroll, true);
    return(()=>{
      window.removeEventListener("scroll", handleScroll,true)
    })
  })
  
  return (
    <Fragment>
      <Header />
      <MainWrapper>
        <HomePageContent></HomePageContent>
        <HomePageSider></HomePageSider>
        {showCallTop ?
          (<CallbackTop onClick={goScrollTop}>^</CallbackTop>)
          : ("")}
      </MainWrapper>
    </Fragment>
  );
}

export default Home;