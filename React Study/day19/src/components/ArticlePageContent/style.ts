/*
 * @Author: your name
 * @Date: 2020-06-09 08:41:25
 * @LastEditTime: 2020-06-13 00:04:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\ArticlePageContent\style.ts
 */ 
import style from "styled-components";
import { ElementType } from "react";

export const ArticleContentWrapper:ElementType = style.article`
  display:flex;
  width:55%;
  min-width:600px;
  margin-top:68px;
  height:max-content;
  min-height:500px;
  flex-direction:column;
  padding:5px 30px 30px;
  background-color:#fff;
  border-radius:7px;

  b{
    display:block;
    font-size:28px;
    font-weight:bold;
    color:#333;
    text-align:center;
    width:100%;
    margin-top:15px;
    margin-bottom:10px;
  }
  p{
    display:block;
    margin:7px;
    text-indent:35px;
    color:#333;
    line-height:22px;

  }
  pre{
    display:block;
    width:100%;
    border-left:12px solid #40aaff;
    height:max-content;  
    word-break:break-all;
    background-color:rgba(240,240,255,.5);
    line-height:18px;
    overflow:auto;

    code{
      color:#3f3f3f;
      line-height:25px;
    }
  }
`