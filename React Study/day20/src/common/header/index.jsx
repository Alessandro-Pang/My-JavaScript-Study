/*
 * @Author: your name
 * @Date: 2020-06-16 10:52:26
 * @LastEditTime: 2020-06-28 16:01:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\common\header\index.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import ZyIconFont from "common/zy-iconfont";
const { SubMenu } = Menu;
import "./index.less";
import cover from "src/static/logo.png";

const Header = (props) => {
  const MenusList = () => {
    const menus = props.menus.sort((a, b) => {
      return a.sorting - b.sorting;
    });
    const menus_list = [];
    let menus_children = [];
    for (let i = 0; i < menus.length; i++) {
      for (let j = 0; j < menus.length; j++) {
        //检查是否是子节点 && 寻找父级节点
        if (
          menus[i].parent_id === 0 &&
          menus[j].parent_id === menus[i].menu_id
        ) {
          menus_children.push(
            <Menu.Item className="zy-menu-items" key={menus[j].menu_id}>
              <Link to={menus[j].href}>
                <ZyIconFont iconfont={menus[j].icon} />
                {menus[j].menu_name}
              </Link>
            </Menu.Item>
          );
        }
      }

      //检查是否是顶级节点 && 检查是否有子节点
      if (menus[i].parent_id === 0 && menus_children.length) {
        menus_list.push(
          <SubMenu
            className="zy-menu-submenu"
            key={menus[i].menu_id}
            icon={<ZyIconFont iconfont={menus[i].icon} />}
            title={menus[i].menu_name}
          >
            {menus_children}
          </SubMenu>
        );
      } else if (menus[i].parent_id === 0) {
        menus_list.push(
          <Menu.Item className="zy-menu-items" key={menus[i].menu_id}>
            <Link to={menus[i].href}>
              <ZyIconFont iconfont={menus[i].icon} />
              {menus[i].menu_name}
            </Link>
          </Menu.Item>
        );
      }
      menus_children = [];
    }
    return menus_list;
  };
  return (
    <header id="zy-header">
      <nav className="zy-position">
        <h1 className="zy-logo">
          <Link to="/">
            <img src={cover} alt="" />
          </Link>
        </h1>
        <Menu mode="horizontal" defaultSelectedKeys="1" className="zy-nav">
          {MenusList()}
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
