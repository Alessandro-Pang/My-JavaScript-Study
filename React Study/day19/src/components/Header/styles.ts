/*
 * @Author: your name
 * @Date: 2020-05-27 22:17:09
 * @LastEditTime: 2020-06-09 09:00:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\Header\styles.js
 */

import style from "styled-components";
import logoPic from "../../static/logo.png";
import { ElementType } from "react";

export const HeaderWrapper:ElementType = style.header`
  position:relative;
  top:0;
  width:100%;
  background-color:#fff;
  border-style:solid;
  border-color: #f0f0f0;
  border-width:0 0 1px;
  border-radius:0;
  position:fixed;
  height:58px;
  line-height:58px;
  z-index:1;
  user-select:none;

  i,button{
    cursor:pointer;
  }
`;

export const Logo:ElementType = style.div`
  position:absolute;
  top:0;
  left:0;
  display:block;
  height:58px;
  width:100px;
  background-image:url(${logoPic});
  background-size:contain;
  background-position:center;
  background-repeat:no-repeat;
`;

export const WriteWrapper:ElementType = style.button`
  position:absolute;
  right:10px;
  height:40px;
  width:100px;
  border:0;
  line-height:24px;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
  word-spacing:3px;
  font-weight:bold;
  
  .iconfont{
    color:#fff
  }
`;

export const NavBarWrapper:ElementType = style.nav`
  position:absolute;
  left:100px;
  right:150px;
  height:58px;
  min-width:400px;
  max-weight:calc(100vw - 220px);
  line-height:58px;
  display:flex;
  padding-left:calc(15vw - 100px);
`;

export const LeftNavWrapper:ElementType = style.div`
  display:flex;
  justify-content:start;
  align-items:center;
  flex:1;

  div{
    cursor:pointer;
  }
`;

/** Nav通用布局样式 */
const navJustifyPosition = `
  display:flex;
  width:80px;
  justify-content:center;
  align-items:center;
`;

export const HomePageWrapper:ElementType = style.div`
  ${navJustifyPosition}
  a{
    margin-top:2px;
    text-decoration:none;
    color: #ea6f5a;
    font-size:18px;
  }
`;

export const DownloadAPPWrapper:ElementType = style.div`
  ${navJustifyPosition}
  color:#303030;

  :hover{
    background-color:rgba(240,240,240,.8)
  }
`;

export const SearchInputWrapper:ElementType = style.div`
  margin:20px;
  display:flex;
  height:38px;
  border-radius:19px;
  background-color:#eee;
  align-items:center;
  justify-content:center;
  position:relative;

  .on-focus{
    background-color:#ccc
  }

  label{
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;
export const SearchIcon:ElementType = style.div`
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  right:4px;
  width:30px;
  height:30px;
  border-radius:15px;
  .iconfont{
    font-size:18px;
  }
`;

export const SearchInput:ElementType = style.input.attrs({ placeholder: "搜索" })`
  display:flex;
  outline:none;
  align-items: center;
  justify-content:center;
  width:140px;
  height:36px;
  border-radius:19px;
  border:0;
  background-color:#eee;
  padding-left:15px;
  transition:width 0.3s linear;
`;

export const SearchHotList:ElementType = style.div`
  position:absolute;
  width:240px;
  min-height:60px;
  top:50px;
  left:0px;
  background-color:#fff;
  border-radius:4px;
  box-shadow:0 0 15px 1px #969696;
  line-height:20px;
  padding:5px 8px;
  display:flex;
  flex-wrap:wrap;
  justify-content:start;

  &::before{
    content:'';
    width:20px;
    height:20px;
    position:absolute;
    background:#fff;
    transform:rotate(45deg);
    margin-top:-8px;
    margin-left:25px;
  }
  div.hot-title{
    display:flex;
    width:45%;
    margin:5px 0 5px 3px;
    font-size:14px;
    z-index:1;
  }

  div.in-a-batch{
    display:flex;
    font-size:14px;
    width:50%;
    margin:5px 0 5px 3px;
    justify-content:end;
    //该属性在Chrome下使用
    justify-content:flex-end;

    i{
      transition:all 0.8s linear;
    }
  }

  span.hot-class{
    display:flex;
    white-space:nowrap;
    justify-content:center;
    font-size:13px;
    padding:3px;
    margin:5px 3px;
    color:#585858;
    z-index:1;
    border-color:#ddd;
    border-style:solid;
    border-width:1px;
    border-radius:3px;
  }
`

export const RightNavWrapper:ElementType = style.div`
  display:flex;
  justify-content:end;
  
  a{
    text-decoration:none
  }
`;

export const RegisterWrapper:ElementType = style.button`
  color: #ea6f5a;
  border:1px solid  #ea6f5a;
  border-radius: 20px;
  font-size: 15px;
  height:40px;
  width:80px;
  margin-top:9px;
  background-color:#fff;
  font-weight:bold;
`;

export const ModeWrapper:ElementType = style.div`
  ${navJustifyPosition}
  .iconfont{
    font-size:22px;
    cursor:pointer;
  }
`;

export const BetaWrapper:ElementType = style.div`
  ${navJustifyPosition}
  .iconfont{
    color: #ea6f5a;
    font-weight:blod;
    font-size:22px;
  }

  span{
    display:flex;
    align-items:center;
    background-color:#ea6f5a;
    height:14px;
    font-size:12px;
    color:white;
    border-radius:4px;
    padding:3px;
  }
`;

export const LoginWrapper:ElementType = style.div`
  ${navJustifyPosition} 
  cursor:pointer;
`;
