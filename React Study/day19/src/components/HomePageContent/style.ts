/*
 * @Author: your name
 * @Date: 2020-05-29 23:14:03
 * @LastEditTime: 2020-06-11 13:12:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSections\style.ts
 */
import style from "styled-components";
import { ElementType } from "react";

const flexBoxLayout = `
  display:flex;
  justify-content:start;
  align-items:start;
`

export const HomeContentWrapper: ElementType = style.section`
  ${flexBoxLayout}
  flex-direction:column;
  width:50%;
`;

export const BannerWrapper: ElementType = style.img`
  width:calc(100% - 40px);
  margin:20px;
  border-radius:15px;
`;

export const ArticleWrapper: ElementType = style.ul`
  ${flexBoxLayout}
  margin:20px;
  width:calc(100% - 40px);
  flex-direction:column
`;

export const SectionsWrapper: ElementType = style.li`
  ${flexBoxLayout}
  width:100%;
  min-height:115px;
  border-bottom-width:1px;
  border-bottom-style:solid;
  position:relative;
  padding-top:20px;
  padding-bottom:10px;
`;

export const SectionImg: ElementType = style.img`
  width:30%;
  padding:15px;
  border-radius:5px;
`

export const Content: ElementType = style.section`
  ${flexBoxLayout}
  flex-direction:column;
  width:70%;
`

export const SectionTitle: ElementType = style.strong`
  font-size:18px;
  font-weight:bold;
  margin-top:5px;
  margin-bottom:15px;
  
  a {

    &:link {
      color:#333;
      text-decoration:none;
    }

    &:visited {
      color:#aaa;
    }  
    
    &:hover {
      text-decoration:underline 2px;
    }  
  }     

`

export const SectionAbstract: ElementType = style.p`
  font-size:14px;
  color:#aaa;
`

export const SectionTools: ElementType = style.div` 
  display:flex;
  margin-top:15px;
  width:100%;
  height:20px;
  background-color:#eee;
`

export const ShowMoreAticle: ElementType = style.div`
  display:flex;
  color:#fff;
  width:100%;
  height:40px;
  border-radius:20px;
  background-color:#a5a5a5;
  margin-top:30px;
  justify-content:center;
  align-items:center;
  font-size:15px;
  
  &:hover{
    background-color:#9b9b9b
  }
`