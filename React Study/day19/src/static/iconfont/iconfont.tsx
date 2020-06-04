/*
 * @Author: your name
 * @Date: 2020-05-27 22:45:09
 * @LastEditTime: 2020-06-03 22:38:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\static\iconfont\iconfont.js
 */ 
import { createGlobalStyle } from "styled-components";

export const IcontFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1591194751180'); /* IE9 */
    src: url('iconfont.eot?t=1591194751180#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1591194751180') format('woff'),
    url('iconfont.ttf?t=1591194751180') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1591194751180#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`