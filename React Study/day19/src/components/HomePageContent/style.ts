/*
 * @Author: your name
 * @Date: 2020-05-29 23:14:03
 * @LastEditTime: 2020-05-30 00:07:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSections\style.ts
 */ 
import style from "styled-components";

const flexBoxLayout = `
  display:flex;
  justify-content:center;
  align-items:start;
`

export const HomeContentWrapper = style.section`
  ${flexBoxLayout}
  width:50%;
  border:1px solid green;
`;

export const BannerWrapper = style.img`
  ${flexBoxLayout}
  margin:30px;
  border-radius:15px;
  `;

export const ArticleWrapper = style.article`
  ${flexBoxLayout}
`;

export const SectionsWrapper = style.section`
  ${flexBoxLayout}
`;