/*
 * @Author: zi.yang
 * @Date: 2020-06-20 11:13:45
 * @LastEditTime: 2020-06-30 07:15:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\components\articleList\zy-card\index.jsx
 */

import React from "react";
import { Row, Col, Typography, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./index.less";
const { Title, Paragraph } = Typography;
const ZyCard = (props) => {
  const {
    title,
    link,
    intro,
    cover,
    author,
    create_date,
    pageView,
    likes,
  } = props;
  return (
    <Typography>
      <Row className="zy-card-wrapper">
        <Col span={24}>
          <Row className="zy-card-title">
            <Title level={4}>
              <Link to={link}>{title}</Link>
            </Title>
          </Row>
          <Row className="zy-card-intro">
            <Col span={18}>
              <i
                className="fa fa-quote-left fa-2x fa-pull-left fa-border"
                aria-hidden="true"
              ></i>
              <Paragraph
                ellipsis={{ rows: 2, expandable: true, symbol: "更多" }}
              >
                {intro}
              </Paragraph>
            </Col>
            <Col span={6} className="zy-card-cover">
              <Link to="/home/1">
                <img src={cover} alt="" />
              </Link>
            </Col>
          </Row>
          <Row className="zy-card-footer">
            <Col>
              <Tooltip title="作者">
                <i className="fa fa-user fa-lg fa-fw " aria-hidden="true"></i>
                {author}
              </Tooltip>
            </Col>
            <Col className="create_date">
              <Tooltip title="发布时间">
                <i className="fa fa-clock-o fa-lg fa-fw" aria-hidden="true"></i>
                {create_date}
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="浏览量">
                <i className="fa fa-eye fa-lg fa-fw " aria-hidden="true"></i>
                {pageView}
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="点赞量">
                <i
                  className="fa fa-thumbs-o-up fa-lg fa-fw "
                  aria-hidden="true"
                ></i>
                {likes}
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </Typography>
  );
};

export default ZyCard;
