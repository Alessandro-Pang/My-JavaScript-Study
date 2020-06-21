import React, { Component, Fragment } from "react";
import { Row, Col, Pagination } from "antd";
import "./index.less";
import ZyCard from "./zy-card";
import Logo from "src/static/logo.png";

export default class index extends Component {
  intro = ` 小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济`;
  render() {
    return (
      <Fragment>
        <div className="zy-home-container">
          {/* <div className="zy-article"></div> */}
          <Row>
            <Col
              lg={{ span: 14, offset: 2 }}
              md={{ span: 14, offset: 2 }}
              xs={{ span: 22, offset: 1 }}
              sm={{ span: 20, offset: 2 }}
            >
              <ZyCard
                key="z1"
                title="这是一段文字，用来描述标题，用来描述标题"
                link="/home/1"
                intro={this.intro}
                cover={Logo}
                author="子洋"
                create_date="2020-12-20"
                pageView="1000"
                likes="1000"
              />
              <ZyCard
                key="z2"
                title="这是一段文字，用来描述标题，用来描述标题"
                link="/home/2"
                intro={this.intro}
                cover={Logo}
                author="子洋"
                create_date="2020-12-20"
                pageView="1000"
                likes="1000"
              />{" "}
              <ZyCard
                key="z3"
                title="这是一段文字，用来描述标题，用来描述标题"
                link="/home/3"
                intro={this.intro}
                cover={Logo}
                author="子洋"
                create_date="2020-12-20"
                pageView="1000"
                likes="1000"
              />{" "}
              <ZyCard
                key="z4"
                title="这是一段文字，用来描述标题，用来描述标题"
                link="/home/4"
                intro={this.intro}
                cover={Logo}
                author="子洋"
                create_date="2020-12-20"
                pageView="1000"
                likes="1000"
              />{" "}
              <ZyCard
                key="z5"
                title="这是一段文字，用来描述标题，用来描述标题"
                link="/home/5"
                intro={this.intro}
                cover={Logo}
                author="子洋"
                create_date="2020-12-20"
                pageView="1000"
                likes="1000"
              />{" "}
              <ZyCard
                key="z6"
                title="这是一段文字，用来描述标题，用来描述标题"
                link="/home/6"
                intro={this.intro}
                cover={Logo}
                author="子洋"
                create_date="2020-12-20"
                pageView="1000"
                likes="1000"
              />
              <Row
                style={{
                  height: 60,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  total={1185}
                  pageSize={20}
                  size="default"
                  showSizeChanger
                  showQuickJumper
                />
              </Row>
            </Col>
            <Col span={6} style={{ border: "1px solid red" }}  className="aside">
              1111111111111111111111
            </Col>
          </Row>
          <Row
            style={{
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ---------- Footer -------------
          </Row>
        </div>
      </Fragment>
    );
  }
}
