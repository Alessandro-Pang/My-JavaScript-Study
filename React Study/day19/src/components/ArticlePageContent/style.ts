/*
 * @Author: your name
 * @Date: 2020-06-09 08:41:25
 * @LastEditTime: 2020-06-09 13:07:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\ArticlePageContent\style.ts
 */ 
import style from "styled-components";
import { ElementType } from "react";

export const ArticleContentWrapper:ElementType = style.article`
  display:flex;
  width:60%;
  min-width:600px;
  margin-top:58px;
  height:calc(100vh - 58px);
  min-height:500px;
  border:1px solid red;
`