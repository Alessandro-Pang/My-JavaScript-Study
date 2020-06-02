/*
 * @Author: your name
 * @Date: 2020-05-29 22:55:08
 * @LastEditTime: 2020-06-01 12:48:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSider\style.ts
 */ 

import style from "styled-components";

const flexBoxLayout = `
  display:flex;
  justify-content:start;
  align-items:start;
`
/* 侧边栏容器*/
export const HomeSiderWrapper = style.aside`
  display:flex;
  flex-direction:column;
  padding-top:26px;
  width:22.5%;
`;

/** 板块，专栏*/
export const BoardWrapper = style.div`
  ${flexBoxLayout}
  flex-wrap:wrap;
  justify-content:center;
`

export const BoardBanner = style.img`
  ${flexBoxLayout}
  width:95%;
  padding-top:8px;
`

/**推荐作者 */
export const RecommendWrapper = style.div`
  ${flexBoxLayout}
`;

export const DownloadAppInfoWrapper = style.a`
  ${flexBoxLayout}
  flex-direction:row;
  border:1px solid #eee;
  margin:20px 2.5% 20px 2.5%;
  padding:8px 20px;
  border-radius:5px;
  position:relative;
`

export const DownloadAppImg = style.img`
  width:30%;
`
export const DownloadAppInfo = style.div`
  ${flexBoxLayout}
  width:70%;
  margin-left:8px;
  flex-direction:column;

  .title{
    font-size:14px;
    color:#333;
    margin-top:10%;
  }
  
  .description{
    font-size:14px;
    margin-top:8%;
  }
`
export const DownloadBigImg = style.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:170px;
  height:170px;
  box-shadow:0 0 15px 5px #ccc;
  position:absolute;
  bottom:100px;
  left:calc(50% - 85px);
  padding:10px;
  background-color:#fff;
  border-radius:5px;

  &::before{
    content:'';
    display:block;
    width:15px;
    height:15px;
    position:absolute;
    bottom:-7.5px;
    transform:rotate(45deg);
    background-color:#fff;
  }

  img{
    width:95%
  }
`
//commend 推荐
export const CommendAuthorWrapper = style.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
`
export const   CommendWrapper = style.div`
  display:flex;
  width:95%;
  height:16px;
  line-height:16px;
  font-size:15px;
  flex-direction:row;
  padding:7px 0 25px 0;

  div{
    display:flex;
    width:49%;
    font-size:14px;
  }

  div:last-of-type{
    justify-content:flex-end;
  }
`;

export const AuthorWrapper = style.div`
  display:flex;
  width:95%;
  margin:6px 0;
`;

// head portrait 头像
export const HeadPortrait = style.div`
  width:50px;

  img{
    width:100%;
    border-radius:50%;
  }
`;

export const AuthorInfo = style.div`
  margin-left:13px;
  flex:1;
`

export const AuthorName = style.div`
  font-size:14px;
  color:#333;
  margin:8px 0
`;

export const  AuthorArticleInfo = style.div`
  font-size:12px;
`;

export const FocusOnTheAuthor = style.div`
  display:flex;
  justify-content:end;
  align-items:center;
  color:#22cc58;
  font-size:14px;
  padding-right:5px;
`;

export const CommendMoreWrapper = style.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:15px;
  width:95%;
  height:36px;
  background-color:#f7f7f7;
  border:1px solid #dcdcdc;
  color:#787878;
  border-radius:4px;
  font-size:13px;
`;