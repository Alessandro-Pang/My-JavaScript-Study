/*
 * @Author: your name
 * @Date: 2020-05-27 08:51:47
 * @LastEditTime: 2020-05-27 08:53:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\components\Index\compoent\CYfooter.js
 */

import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function CYfooter(props) {
  return (
    <Footer className="index-footer">
      <div>&copy;http://www.alexpang.cn</div>
      <div>
        Powered By{" "}
        <a target="_blank" href="http://www.alexpang.cn">
          Pangchaoyue
        </a>
      </div>
    </Footer>
  );
}
