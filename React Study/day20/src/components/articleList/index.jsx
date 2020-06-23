import React, { Component, Fragment } from "react";
import { Row, Col, Pagination } from "antd";
import "./index.less";
import ZyCard from "./zy-card";
import Logo from "src/static/logo.png";

export default class ArticleList extends Component {
  intro = ` 小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济
  小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济`;
  pcyCardArr = [];
  eachCard = (loading, intro) => {
    for (let i = 0; i < 10; i++) {
      const randomPageView = (Math.random() * 1000) << 0;
      const randomLikes = (Math.random() * 1000) << 0;
      this.pcyCardArr.push(
        <ZyCard
          key={"zyCard-keys" + i}
          title="这是一段文字，用来描述标题，用来描述标题"
          link={"/home/article/" + i}
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
  state = {
    paginationSize:"default"
  }
  componentDidMount(){
      const width = window.innerWidth;
      if(width < 756){
        this.setState({
          paginationSize:"small"
        })
      }else{
        this.setState({
          paginationSize:"default"
        })
      }
  }
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
            className="zy-article-pagination"
          >
            <Pagination
              total={1185}
              pageSize={10}
              size={this.state.paginationSize}
              showSizeChanger
              showQuickJumper
            />
            {/* 你不会希望一页显示一百条的 */}
          </Row>
        </Col>
      </Fragment>
    );
  }
}
