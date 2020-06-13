/*
 * @Author: your name
 * @Date: 2020-06-12 08:52:10
 * @LastEditTime: 2020-06-13 00:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\ArticlePageSider\style.js
 */ 

import style from "styled-components";
import { ElementType } from "react";

export const ArticleSiderWrapper = style.aside`
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:center;
  width:19vw;
  min-width:220px;
  height:max-content;
  min-height:calc(100vh - 58px);
  margin-top:58px;
  margin-left:10px;

  img {
    width:100%;
    border-radius:7px;
    margin-top:10px
  }

  hr{
    width:90%;
    height:1px;
    font-weight:nomra;
    border:0;
    border-bottom:1px solid #ddd;
  }  
`

export const AuthorWrapper = style.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:max-content;
  min-height:300px;
  margin-top:10px;
  border-radius:7px;
  background-color:#fff;

` 

export const Author = style.div`
  display:flex;
  height:max-content;
  width:100%;
  flex-direction:row;
  padding:7px 0 10px 10px;
  align-items:center;
  
  div.header{
    display:flex;
    height:100%;
    min-height:50px;

    img{
      width:50px;
      border-radius:25px;
    }
  }
`
export const AuthorInfo = style.div`
  height:max-content;
  margin-left:20px;
  display:flex;
  flex-direction:column;
 `
export const AuthorName: ElementType = style.div`
  font-size:14px;
  color:#333;
  margin:8px 0
`;

export const AuthorArticleInfo: ElementType = style.div`
  font-size:12px;
`;

export const AuthorForArticle = style.div`
  height:max-content;
  min-height:65px;
  margin:5px 10px;
  line-height:22px;
  font-size:14px;
  display:flex;
  flex-direction:column;
  
  p{
    color:#333;
    flex:1
  }

  span{
    flex:1;
    font-size:12px;
  }
`

export const CommendAritleWrapper = style.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:max-content;
  min-height:300px;
  margin-top:10px;
  border-radius:7px;
  width:19vw;
  min-width:220px;
  background-color:#fff;

  hr{
    margin-bottom:0;
    height:0;
    border:10px solid rgba(245,245,245,.9);
    width:100%;
    position:relative;

    &:before{
      content:'';
      display:block;
      width:100%;
      height:20px;
      border-radius:7px;
      margin:0;
      padding:0;
      position:absolute;
      top:-20px;
      left:-10px;
      background:#fff;
    }
  }

  img{
    margin-top:0;
  }
`
export const CommendHeader = style.div`
  height:30px;
  margin:20px 15px 10px;
  line-height:30px;

  div{
    height:20px;
    line-height:20px;
    vertical-align:middle;
    border-left:5px solid #ea6f5a;
    padding-left:5px;
    color:#333
  }

`
export const CommendInfo = style.div`
  margin:0 10px 10px;
  font-size:14px;
  line-height:22px;
  
  p{
    color:#333    
  }

  span{
    font-size:12px;
  }
`
