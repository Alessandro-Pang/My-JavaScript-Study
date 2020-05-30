/*
 * @Author: your name
 * @Date: 2020-05-29 22:55:08
 * @LastEditTime: 2020-05-29 23:59:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSider\style.ts
 */ 

import style from "styled-components";

const flexBoxLayout = `
  display:flex;
  justify-content:center;
  align-items:center;
`
/* 侧边栏容器*/
export const HomeSiderWrapper = style.aside`
  ${flexBoxLayout}
  width:20%;
  border:1px solid yellow
`;

/** 板块，专栏*/
export const boardWrapper = style.div`

`

/**推荐作者 */
export const RecommendWrapper = style.div`

`;
