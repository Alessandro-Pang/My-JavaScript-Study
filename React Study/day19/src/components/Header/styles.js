/*
 * @Author: your name
 * @Date: 2020-05-27 22:17:09
 * @LastEditTime: 2020-05-28 08:14:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\Header\styles.js
 */

import style from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = style.header`
  position:relative;
  width:100%;
  background-color:#fff;
  border-style:solid;
  border-color: #f0f0f0;
  border-width:0 0 1px;
  border-radius:0;
  position:fixed;
  height:58px;
  line-height:58px;
`;

export const Logo = style.div`
  position:absolute;
  top:0;
  left:0;
  display:block;
  height:58px;
  width:100px;
  background:url(${logoPic});
  background-size:contain;
  background-position:center;
  background-repeat:no-repeat
`;

export const WriteWrapper = style.button`
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
`;

export const NavBarWrapper = style.nav`
  position:absolute;
  left:100px;
  right:150px;
  height:58px;
  min-width:400px;
  line-height:58px;
  overflow:hidden;
`;
export const RegisterWrapper = style.button`
  float:right;
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

export const ModeWrapper = style.div`
  float:right;  
  width:100px;
`;

export const BetaWrapper = style.div`
  float:right;  
  width:100px;
`;

export const LoginWrapper = style.div`
  float:right;  
  width:100px;
`;
