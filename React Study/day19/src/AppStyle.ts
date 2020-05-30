/*
 * @Author: your name
 * @Date: 2020-05-28 09:00:39
 * @LastEditTime: 2020-05-29 23:59:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\App.ts
 */ 
import style from "styled-components";

const flexBoxLayout = `
  display:flex;
  justify-content:center;
`
export const MainWrapper = style.main`
  ${flexBoxLayout}
  width:100vw;
  height:calc(100vh - 58px);
  margin-top:58px;
  border:1px solid red
`