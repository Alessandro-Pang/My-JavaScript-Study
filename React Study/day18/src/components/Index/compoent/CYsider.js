/*
 * @Author: your name
 * @Date: 2020-05-27 08:38:47
 * @LastEditTime: 2020-05-27 08:55:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\components\Index\compoent\CYsider.js
 */

import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
import Icon from "@/Index/Icon";
import AntIcon, {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
  ChromeOutlined,
  TaobaoCircleOutlined,
} from "@ant-design/icons";

export default function CYsider(props) {
  const { collapsed, data } = props;
  return (
    <Sider
      className="index-sider-menu"
      trigger={null}
      collapsible
      style={{ display: collapsed ? "none" : "block" }}
      // collapsed={collapsed}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys="Sys_menu">
        <Menu.Item key="Sys_menu" icon={<ChromeOutlined />}>
          <Link to="/Sys_menu" className="nav">
            Sys_menu
          </Link>
        </Menu.Item>
        {data.map((el) => (
          <Menu.Item key={el.href} icon={Icon[el.icon]}>
            <Link to={"/" + el.href} className="nav">
              {el.navName}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
