import React, { Fragment } from "react";
import { BackTop, Row, Col } from "antd";
import Header from "container/header";
import Footer from "common/footer";
import FindList from "container/findList";
import Aside from "@/aside";
// import "./index.less";

const FindArticle = () => {
  return (
    <Fragment>
      <Header></Header>
      <Row id="zy-article-container">
        <Col
          lg={{ span: 14, offset: 2 }}
          md={{ span: 14, offset: 2 }}
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
        >
          <FindList />
        </Col>
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
};

export default FindArticle;
