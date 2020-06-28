/*
 * @Author: zi.yang
 * @Date: 2020-06-21 23:58:12
 * @LastEditTime: 2020-06-28 10:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\components\aside\index.js
 */

import React, { Fragment } from "react";
import { Col, Row, Input, Form, Button } from "antd";
import Tag from "common/tags";
import { FireOutlined } from "@ant-design/icons";
import HotArticleList from "@/hotArticleList"
import "./index.less";

const Aside = (props) => {
  const getTags = () => {
    const tags = [];
    for (let i = 0; i <= 25; i++) {
      tags.push(
        <Tag
          key={"tags-" + i}
          tagName={Math.random().toString(36).slice(2, 8)}
          icon="fa-tag"
          link={'/blog/article/'+ i}
        ></Tag>
      );
    }
    return tags;
  };
  const getLink = () => {
    const lins = [];
    const links = [
      { name: "百度", address: "http://www.baidu.com" },
      { name: "谷歌", address: "http://www.baidu.com" },
      { name: "有道", address: "http://www.baidu.com" },
      { name: "掘金", address: "http://www.baidu.com" },
      { name: "掘金金", address: "http://www.baidu.com" },
      { name: "掘金", address: "http://www.baidu.com" },
      { name: "掘金掘金", address: "http://www.baidu.com" },
      { name: "百度度度度", address: "http://www.baidu.com" },
      { name: "谷歌歌", address: "http://www.baidu.com" },
      { name: "掘金掘金", address: "http://www.baidu.com" },
      { name: "百度百百度", address: "http://www.baidu.com" },
      { name: "掘金掘金", address: "http://www.baidu.com" },
      { name: "百度度度度", address: "http://www.baidu.com" },
      { name: "谷歌歌", address: "http://www.baidu.com" },
      { name: "掘金掘金", address: "http://www.baidu.com" },
      { name: "百度度百度", address: "http://www.baidu.com" },
    ];
    for (let i = 0; i < links.length; i++) {
      lins.push(
        <Tag
          key={"tags-" + i}
          tagName={links[i].name}
          link = {links[i].address}
          icon="fa-link"
        ></Tag>
      );
    }
    return lins;
  };
  const getFiling = () => {
    const arr = [];
    const filing = [
      {
        date: "2020-12",
        link:"/blog/article/",
        count:"10"
      },
      {
        date: "2020-11",
        link:"/blog/article/",
        count:"5"
      },
      {
        date: "2020-10",
        link:"/blog/article/",
        count:"15"
      },
      {
        date: "2020-09",
        link:"/blog/article/",
        count:"35"
      },
      {
        date: "2020-08",
        link:"/blog/article/",
        count:"25"
      },
    ];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <Tag
          key={"tags-" + i}
          tagName={filing[i].date +' ( ' +filing[i].count+'篇 )'}
          link={filing[i].link + i}
          icon="fa-bookmark"
        ></Tag>
      );
    }
    return arr;
  };
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
              <Form className="zy-flex-center">
                <Form.Item>
                  <Input
                    style={{ height: 40, borderRadius: "7px 0 0 7px" }}
                    placeholder="搜索"
                    prefix={<i className="fa fa-edit fa-lg fa-fw"></i>}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    type="primary"
                    style={{ height: 40, borderRadius: "0 7px 7px 0" }}
                  >
                    <i className="fa fa-search fa-fw fa-lg" />
                  </Button>
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <i className="fa fa-tags fa-fw fa-lg fa-rotate-90" /> 标签墙
            </Row>
            <Row className="zy-sider-content">{getTags()}</Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <i className="fa fa-calendar fa-fw fa-lg" /> 博客归档
            </Row>
            <Row className="zy-sider-content">
              {getFiling()}
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <FireOutlined style={{ marginRight: 2 }} /> 热门文章
            </Row>
            <Row className="zy-sider-content">
              <HotArticleList/>
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">
              <i className="fa fa-link fa-lg fa-fw fa-rotate-90" />
              导航链接
            </Row>
            <Row className="zy-sider-content">{getLink()}</Row>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};

export default Aside;
