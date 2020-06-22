import React from "react";
import { Row, Col } from "antd";
import "./index.less";

const Footer = () => {
  return (
    <Row id="zy-footer">
      <Col className="zy-footer-col" md={{ span: 6 }} xs={{ span: 24 }}>
        关于本站
      </Col>
      <Col className="zy-footer-col" md={{ span: 6 }} xs={{ span: 24 }}>
        声明
      </Col>
      <Col className="zy-footer-col" md={{ span: 6 }} xs={{ span: 24 }}>
        微信公众号
      </Col>
      <Col className="zy-footer-col" md={{ span: 6 }} xs={{ span: 24 }}>
        版权声明：
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Footer;
