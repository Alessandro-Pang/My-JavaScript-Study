import React, { Component, Fragment } from "react";
import { BackTop, Row, Col } from "antd";
import Header from "container/header";
import Footer from "common/footer";
import ArticleList from "@/articleList";
import Aside from "@/aside";
import "./index.less";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Row id="zy-article-container">
          <ArticleList></ArticleList>
          <Col span={6} id="zy-aside-container">
            <Aside></Aside>
          </Col>
        </Row>
        <BackTop>
          <div className="back-top">
            <i className="fa fa-fw fa-hand-o-up fa-2x"></i>
          </div>
        </BackTop>
        <Footer></Footer>
      </Fragment>
    );
  }
}
