/*
 * @Author: your name
 * @Date: 2020-06-16 10:52:26
 * @LastEditTime: 2020-06-23 09:46:27
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
const Header = () => {
  return (
    <header id="zy-header">
      <div className="zy-position">
        <h1 className="zy-logo">
          <Link to="/">
            <img src={cover} alt="" />
          </Link>
        </h1>
        <Menu mode="horizontal" defaultSelectedKeys="1" className="zy-nav">
          <Menu.Item className="zy-menu-items" key="1">
            <Link to="/home">
              <IconPcy iconfont="&#xf003;" />
              博客
            </Link>
          </Menu.Item>
          <SubMenu
            className="zy-menu-submenu"
            icon={<IconPcy iconfont="&#xf003;" />}
            key="2"
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

          <SubMenu key="6" title="算法教程">
            <Menu.Item className="zy-menu-items" key="6c51">
              JavaScript
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="5c62">
              Python
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="56c3">
              LeetCode
            </Menu.Item>
          </SubMenu>

          <SubMenu key="8" title="源码导读">
            <Menu.Item className="zy-menu-items" key="62a51">
              web前端
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="53a62">
              Node
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="526a3">
              Java
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="56a32">
              Python
            </Menu.Item>
          </SubMenu>
          <SubMenu key="book" title="子洋书斋">
            <Menu.Item className="zy-menu-items" key="deve">
              编程开发
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="me">
              个人精进
            </Menu.Item>
            <Menu.Item className="zy-menu-items" key="xiaoshuo">
              散文小说
            </Menu.Item>
          </SubMenu>
          <Menu.Item className="zy-menu-items" key="about">
            时间轴
          </Menu.Item>
          <Menu.Item className="zy-menu-items" key="about-me">
            关于我
          </Menu.Item>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
