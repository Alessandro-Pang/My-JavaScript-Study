/*
 * @Author: your name
 * @Date: 2020-05-27 08:32:19
 * @LastEditTime: 2020-05-27 08:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\components\Index\compoent\CYheader.js
 */
import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

export default function CYheader(props) {
  const { toggle, collapsed } = props;
  return (
    <Header className="index-header">
      <div id="logo">
        <div className="logo-name">Alex&nbsp;Analysis</div>
        <div className="menu-icon">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => {
                toggle(collapsed);
              },
            }
          )}
        </div>
      </div>
    </Header>
  );
}
