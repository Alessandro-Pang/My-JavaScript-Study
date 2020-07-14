/*
 * @Author: zi.yang
 * @Date: 2020-06-21 23:58:12
 * @LastEditTime: 2020-07-08 21:02:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\page\aside\index.jsx
 */

import React, { Fragment } from "react";
import { Col, Row, Input, Form, Button } from "antd";
import { FireOutlined } from "@ant-design/icons";
import HotArticleList from "container/hotArticleList";
import LabelTheWall from "container/labelTheWall";
import BlogFiling from "container/blogFiling";
import NavLink from "container/navLink";
import Search from "@/search";
import "./index.less";

const Aside = (props) => {
  return (
    <Fragment>
      <Col className="zy-aside-box">
        <Row className="zy-sider-search">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <i className="fa fa-search fa-lg fa-fw fa-rotate-90" />
              站内搜索
            </Row>
            <Row className="zy-sider-content">
              <Search/>
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <i className="fa fa-tags fa-fw fa-lg fa-rotate-90" /> 标签墙
            </Row>
            <Row className="zy-sider-content">
              <LabelTheWall />
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <i className="fa fa-calendar fa-fw fa-lg" /> 博客归档
            </Row>
            <Row className="zy-sider-content">
              <BlogFiling />
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <FireOutlined style={{ marginRight: 2 }} />
              热门文章
            </Row>
            <Row className="zy-sider-content">
              <HotArticleList />
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <i className="fa fa-link fa-lg fa-fw fa-rotate-90" />
              导航链接
            </Row>
            <Row className="zy-sider-content">
              <NavLink />
            </Row>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};

export default Aside;
