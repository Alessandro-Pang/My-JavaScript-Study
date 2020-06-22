/*
 * @Author: zi.yang
 * @Date: 2020-06-21 23:58:12
 * @LastEditTime: 2020-06-22 23:03:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\components\aside\index.js
 */

import React, { Fragment } from "react";
import { Col, Row, Input, Form, Button } from "antd";
import Tag from "../tags";

import "./index.less";
const Aside = (props) => {
  const tags = []
  const getTags = ()=>{
    for(let i=0 ; i<=25;i++){
      tags.push(
        <Tag key={'tags-'+i} tagName={Math.random().toString(36).split(3,4)}></Tag>
      )
    }
    return tags;
  }
  return (
    <Fragment>
      <Col className="zy-aside-box">
        <Row className="zy-sider-search">
          <Col  className="zy-sider-col">
            <Row className="zy-sider-title">站内搜索</Row>
            <Row className="zy-sider-content">
              <Form className="zy-flex-center">
                <Form.Item>
                  <Input style={{height:40}}
                    placeholder="搜索"
                    prefix={<i className="fa fa-edit fa-lg"></i>}
                  />
                </Form.Item>
                <Form.Item >
                  <Button htmlType="submit" type="primary" style={{height:38}}>
                    <i className="fa fa-search" />
                  </Button>
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">标签墙</Row>
            <Row className="zy-sider-content">
                {getTags()}
            </Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">归档</Row>
            <Row className="zy-sider-content">1</Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">热门文章</Row>
            <Row className="zy-sider-content">1</Row>
          </Col>
        </Row>
        <Row className="zy-sider">
          <Col className="zy-sider-col">
            <Row className="zy-sider-title">友情链接</Row>
            <Row className="zy-sider-content">1</Row>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};

export default Aside;
