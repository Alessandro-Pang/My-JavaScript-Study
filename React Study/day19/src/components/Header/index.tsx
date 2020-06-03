/*
 * @Author: your name
 * @Date: 2020-05-27 22:15:17
 * @LastEditTime: 2020-06-03 00:07:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\Header\index.js
 */

import React from "react";
import PropTypes from "prop-types";
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
  SearchHotList,
} from "./styles";


const Header = (props: any) => {
  const {
    focus,
    mouseIn,
    list,
    page,
    handleInputFocus,
    handleInputBlur,
    handleMuseIn,
    handleMuseOut,
    handleClickInBatch
  } = props;
  let input: any;

  const getHotList: any = () => {
    const newList = list.toJS();
    const pageList = [];
    
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      console.log(newList[0])
      pageList.push(
        <span className="hot-class" key={0}>
          newList
        </span>
      );
    }
    if (focus || mouseIn) {
      return (
        <SearchHotList
          onMouseLeave={() => handleMuseOut(mouseIn)}
          onMouseEnter={() => handleMuseIn(mouseIn)}
        >
          <div className="hot-title">热点搜索</div>
          <div className="in-a-batch" onClick={()=>{handleClickInBatch(page,list)}}>
            <i className="iconfont">&#58909;</i>换一批
          </div>
          {pageList}
        </SearchHotList>
      );
    }
  };
  return (
    <HeaderWrapper>
      <Logo />
      <NavBarWrapper>
        <LeftNavWrapper>
          <HomePageWrapper>首页</HomePageWrapper>
          <DownloadAPPWrapper>下载APP</DownloadAPPWrapper>
          <SearchInputWrapper>
            <SearchIcon
              className={focus ? "on-focus" : ""}
              onClick={() => (focus ? input.blur() : input.focus())}
            >
              <i className="iconfont">&#59016;</i>
            </SearchIcon>
            {/* 需要配置防抖节流 */}
            <SearchInput
              id="search_input"
              ref={(el) => (input = el)}
              onFocus={() => handleInputFocus(focus, page, list)}
              onBlur={() => handleInputBlur(focus)}
              style={{ width: focus ? "200px" : "150px" }}
            ></SearchInput>
            {getHotList()}
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

Header.propTypes = {
  focus: PropTypes.bool.isRequired,
  mouseIn: PropTypes.bool.isRequired,
  //这里报警告，一个对象
  list: PropTypes.object.isRequired,
  handleInputFocus: PropTypes.func.isRequired,
  handleInputBlur: PropTypes.func.isRequired,
};

export default Header;
