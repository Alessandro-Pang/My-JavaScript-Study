/*
 * @Author: your name
 * @Date: 2020-06-16 10:52:26
 * @LastEditTime: 2020-06-16 22:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\common\header\index.js
 */

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;
import "./index.less";
import IconPcy from "src/common/pcy-iconfont"

const Header = () => {
  return (
    <header id="header">
      <div className="position">
        <h1 className="logo">
          <Link to="/">ZiYang Blog</Link>
        </h1>
        <Menu mode="horizontal" defaultSelectedKeys="1" className="nav">
          <Menu.Item className="pcy-menu-items" key="1">
            <Link to="/home"><IconPcy iconfont="&#58897;"/>博客</Link>
          </Menu.Item>
          <SubMenu className="pcy-menu-submenu" key="2" title="前端教程">
            <Menu.ItemGroup className="pcy-menu-itemgroup" title="基础">
              <Menu.Item className="pcy-menu-items" key="21">
                HTML
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="22">
                CSS
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="23">
                JavaScript
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup
              className="pcy-menu-itemgroup"
              key="3"
              title="前端中级"
            >
              <Menu.Item className="pcy-menu-items" key="3">
                HTML5
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="31">
                CSS3
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="32">
                ES6 & ES7
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup
              className="pcy-menu-itemgroup"
              key="4"
              title="前端高级"
            >
              <Menu.Item className="pcy-menu-items" key="41">
                HTML5
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="42">
                CSS3
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="43">
                ES6 & ES7
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <SubMenu key="5" title="后端教程">
            <Menu.ItemGroup className="pcy-menu-itemgroup" title="语言教程">
              <Menu.Item className="pcy-menu-items" key="51">
                NodeJS
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="52">
                Python
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="53">
                Java
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup className="pcy-menu-itemgroup" title="关系型数据库">
              <Menu.Item className="pcy-menu-items" key="5111">
                Oracle
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="5112">
                MySQL
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="5113">
                SqlServer
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup
              className="pcy-menu-itemgroup"
              title="非关系型数据库"
            >
              <Menu.Item className="pcy-menu-items" key="5221">
                Mongdb
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="5223">
                Redis
              </Menu.Item>
              <Menu.Item className="pcy-menu-items" key="5323">
                PostSQL
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <SubMenu key="6" title="算法教程">
            <Menu.Item className="pcy-menu-items" key="6c51">JavaScript</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="5c62">Python</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="56c3">LeetCode</Menu.Item>
          </SubMenu>

          <SubMenu key="7" title="BI教程">
            <Menu.Item className="pcy-menu-items" key="65w11">Excle</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="56w12">Qlik Sense</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="51w163">Power BI</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="512w63">Tablua</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="15w63">数据分析</Menu.Item>
          </SubMenu>

          <SubMenu key="8" title="源码解读">
            <Menu.Item className="pcy-menu-items" key="62a51">JQuery</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="53a62">zepto</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="526a3">Vue</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="56a32">React</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="5a263">Angular</Menu.Item>
          </SubMenu>

          <SubMenu key="8.1" title="面试相关">
            <Menu.Item className="pcy-menu-items" key="6c151">计算机基础</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="564c2">网络协议</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="5c643">前端面试</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="5c476">后端面试</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="58c49">BI面试</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="54c99">ETL面试</Menu.Item>
            <Menu.Item className="pcy-menu-items" key="898c1">DBA面试</Menu.Item>
          </SubMenu>

          <Menu.Item className="pcy-menu-items" key="about-me">关于我</Menu.Item>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
