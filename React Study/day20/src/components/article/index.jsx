import React, { Component, Fragment } from "react";
import { Row, Col, Pagination, Skeleton } from "antd";
import "./index.less";
import ZyCard from "./zy-card";
import Logo from "src/static/logo.png";

export default class index extends Component {
  intro = ` 小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济`;
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    let timer = setTimeout(() => {
      this.setState({
        loading: false,
      });
      clearTimeout(timer);
    }, 3000);
  }
  pcyCardArr = [];
  eachCard = (loading, intro) => {
    for (let i = 0; i <= 30; i++) {
      const randomPageView = (Math.random() * 1000) << 0;
      const randomLikes = (Math.random() * 1000) << 0;
      this.pcyCardArr.push(
        <ZyCard
          key={"zyCard-keys" + i}
          title="这是一段文字，用来描述标题，用来描述标题"
          link={"/home/" + i}
          intro={this.intro}
          cover={Logo}
          author="子洋"
          create_date="2020-12-20"
          pageView={randomPageView}
          likes={randomLikes}
        />
      );
    }
    return this.pcyCardArr;
  };
  render() {
    return (
      <Fragment>
        <Col
          lg={{ span: 14, offset: 2 }}
          md={{ span: 14, offset: 2 }}
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
        >
          {this.eachCard()}
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
      </Fragment>
    );
  }
}
