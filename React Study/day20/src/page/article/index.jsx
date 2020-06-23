import React, { Fragment } from "react";
import { BackTop, Row, Col } from "antd";
import Header from "common/header";
import Footer from "common/footer";
import ArticleContent from "@/articleContent";
import Aside from "@/aside";
import "./index.less";

const AticlePage =(props)  => {
    return (
      <Fragment>
        <Header></Header>
        <Row id="zy-article-container">
          <ArticleContent></ArticleContent>
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

export default AticlePage;
