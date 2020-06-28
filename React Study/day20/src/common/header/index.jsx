/*
 * @Author: your name
 * @Date: 2020-06-16 10:52:26
 * @LastEditTime: 2020-06-28 00:19:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\common\header\index.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;
import "./index.less";
import IconPcy from "src/common/zy-iconfont";
import cover from "src/static/logo.png";
const Header = (props) => {
  const eachMenus = () => {
    const menus = props.menus;
    const menus_info = [];
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].parent_id === 0) {
        menus_info.push(
          <Menu.Item className="zy-menu-items" key={menus[i].menu_id}>
            <Link to={menus[i].href}>
              <IconPcy iconfont={menus[i].icon} />
              {menus[i].menu_name}
            </Link>
          </Menu.Item>
        );
      }
    }
    return menus_info;
  };
  return (
    <header id="zy-header">
      <div className="zy-position">
        <h1 className="zy-logo">
          <Link to="/">
            <img src={cover} alt="" />
          </Link>
        </h1>
        <Menu mode="horizontal" defaultSelectedKeys="1" className="zy-nav">
          {eachMenus()}
          <SubMenu
            className="zy-menu-submenu"
            icon={<IconPcy iconfont="&#xf003;" />}
            key="nsa2"
            title="小白文档"
          >
            <Menu.Item className="zy-menu-items" key="21">
              <Link to="/home">
                <IconPcy iconfont="&#xf003;" />
                前端开发
              </Link>
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="22">
              <Link to="/home">
                <IconPcy iconfont="&#xf003;" />
                后端开发
              </Link>
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="23">
              <Link to="/home">
                <IconPcy iconfont="&#xf003;" />
                数据分析
              </Link>
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="213">
              <Link to="/home">
                <IconPcy iconfont="&#xf003;" />
                面试相关
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </header>
  );
};

export default Header;