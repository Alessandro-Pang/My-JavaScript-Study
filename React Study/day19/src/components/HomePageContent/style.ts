/*
 * @Author: your name
 * @Date: 2020-05-29 23:14:03
 * @LastEditTime: 2020-06-01 22:56:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSections\style.ts
 */ 
import style from "styled-components";

const flexBoxLayout = `
  display:flex;
  justify-content:start;
  align-items:start;
`

export const HomeContentWrapper = style.section`
  ${flexBoxLayout}
  flex-direction:column;
  width:50%;
`;

export const BannerWrapper = style.img`
  width:calc(100% - 40px);
  margin:20px;
  border-radius:15px;
`;

export const ArticleWrapper = style.ul`
  ${flexBoxLayout}
  margin:20px;
  width:calc(100% - 40px);
  flex-direction:column
`;

export const SectionsWrapper = style.li`
  ${flexBoxLayout}
  width:100%;
  min-height:112px;
  border-bottom-width:1px;
  border-bottom-style:solid;
  position:relative;
  padding-top:20px;
  padding-bottom:10px;
`;

export const SectionImg = style.img`
  width:30%;
  padding:15px;
  border-radius:5px;
`

export const Content = style.section`
  ${flexBoxLayout}
  flex-direction:column;
  width:70%;
`

export const SectionTitle = style.strong`
  font-size:18px;
  font-weight:bold;
  color:#333;
  margin-top:5px;
  margin-bottom:15px;
`

export const SectionAbstract = style.p`
  font-size:14px;
  color:#aaa;
`

export const SectionTools = style.div` 
  position:absolute;
  bottom:15px;
  width:70%;
  height:20px;
  background-color:#eee;
`

export const ShowMoreAticle = style.div`
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