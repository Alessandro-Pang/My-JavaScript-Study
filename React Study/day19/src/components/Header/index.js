/*
 * @Author: your name
 * @Date: 2020-05-27 22:15:17
 * @LastEditTime: 2020-05-28 00:22:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\Header\index.js
 */

import React from "react";
import {
  HeaderWrapper,
  Logo,
  WriteWrapper,
  NavBarWrapper,
  RegisterWrapper,
  ModeWrapper,
  BetaWrapper,
  LoginWrapper
} from "./styles";
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBarWrapper>
        <ModeWrapper>
          <i className="iconfont">&#58934;</i>
        </ModeWrapper>
        <BetaWrapper>
          <i className="iconfont">&#58882;</i>
        </BetaWrapper>
        <LoginWrapper>
          登录
        </LoginWrapper>
        <RegisterWrapper> 注册 </RegisterWrapper>
      </NavBarWrapper>
      <WriteWrapper>
        <i className="iconfont">&#xe6e5;</i> 写文章
      </WriteWrapper>
    </HeaderWrapper>
  );
};

export default Header;
