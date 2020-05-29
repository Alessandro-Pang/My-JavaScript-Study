/*
 * @Author: your name
 * @Date: 2020-05-27 22:15:17
 * @LastEditTime: 2020-05-29 13:58:32
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
  LeftNavWrapper,
  HomePageWrapper,
  DownloadAPPWrapper,
  SearchInputWrapper,
  SearchIcon,
  SearchInput,
  RightNavWrapper,
  RegisterWrapper,
  ModeWrapper,
  BetaWrapper,
  LoginWrapper,
} from "./styles";

const Header = (props: any) => {
  const { focus, handleInputFocus, handleInputBlur } = props;
  let input: any;
  return (
    <HeaderWrapper>
      <Logo />
      <NavBarWrapper>
        <LeftNavWrapper>
          <HomePageWrapper>首页</HomePageWrapper>
          <DownloadAPPWrapper>下载APP</DownloadAPPWrapper>
          <SearchInputWrapper style={{ width: focus ? "220px" : "160px" }}>
            <SearchIcon
              className={focus ? "on-focus" : ""}
              onClick={() => focus ? input.blur() : input.focus()}
            >
              <i className="iconfont">&#59016;</i>
            </SearchIcon>
            {/* 需要配置防抖节流 */}
            <SearchInput
              id="search_input"
              ref={el => input = el}
              onFocus={() => handleInputFocus(focus)}
              onBlur={() => handleInputBlur(focus)}
              style={{ width: focus ? "180px" : "140px" }}
            ></SearchInput>
          </SearchInputWrapper>
        </LeftNavWrapper>
        <RightNavWrapper>
          <ModeWrapper>
            <i className="iconfont">&#58934;</i>
          </ModeWrapper>
          <BetaWrapper>
            <i className="iconfont">&#58882;</i>
            <span>Beta</span>
          </BetaWrapper>
          <LoginWrapper>登录</LoginWrapper>
          <RegisterWrapper> 注册 </RegisterWrapper>
        </RightNavWrapper>
      </NavBarWrapper>
      <WriteWrapper>
        <i className="iconfont">&#xe6e5;</i> 写文章
      </WriteWrapper>
    </HeaderWrapper>
  );
};

export default Header;
