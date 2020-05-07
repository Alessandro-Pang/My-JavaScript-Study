/*
 * @Author: your name
 * @Date: 2020-05-06 23:59:53
 * @LastEditTime: 2020-05-07 21:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day15\src\components\Home\index.js
 */
import React from "react";
import styles,{home2,ol,iali0,iali2,iali3,iali4,iali5,iali6,abc} from "./index.css";
console.log(styles)
export default function Home() {
  return (
    <div className="my-home">
      <div className="home">吃一包辣条</div>
      <h2>哈哈哈</h2>
      <span className="test-at-root">测试</span>
      <div className={home2}>这是一段话</div>
      <ol className={ol}>
        <li className={iali0}></li>
        <li className={iali2}></li>
        <li className={iali3}></li>
        <li className={iali4}></li>
        <li className={iali5}></li>
        <li className={iali6}></li>
      </ol>
      <div className={abc}></div>
    </div>
  );
}
