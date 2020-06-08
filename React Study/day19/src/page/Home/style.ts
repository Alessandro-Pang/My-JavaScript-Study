/*
 * @Author: your name
 * @Date: 2020-05-28 09:00:39
 * @LastEditTime: 2020-06-08 22:31:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\App.ts
 */ 
import style from "styled-components";
import { ElementType } from "react";

const flexBoxLayout = `
  display:flex;
  justify-content:center;
`
export const MainWrapper:ElementType = style.main`
  ${flexBoxLayout}
  margin-top:58px;
  overflow:hidden;
`

export const CallbackTop:ElementType = style.a`
  position:fixed;
  right:70px;
  bottom:70px;
  width:50px;
  height:50px;
  line-height:50px;
  text-align:center;
  font-size:28px;
  border:1px solid #969696;
  cursor:pointer;
`