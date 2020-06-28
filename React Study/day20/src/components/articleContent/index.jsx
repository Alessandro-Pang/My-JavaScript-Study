import React from "react";
import { Row, Col } from "antd";
import Mditor from "mditor";
import "./index.less";

const ArticleContent = (props) => {
  const parser = new Mditor.Parser();
  const html = parser.parse(props.article);
  return (
    <Col span={24} id="zy-article-content">
      <Row className="zy-markdown">
        <Col span="24">
          <h1 className="zy-article-title">标题标题标题标题标题标题标题</h1>
          <Row className="zy-article-info">
            <Col
              xs={{ span: 6 }}
              md={{ span: 4 }}
              lg={{ span: 3 }}
              title="文章作者"
            >
              <i className="fa fa-user fa-lg fa-fw " aria-hidden="true"></i>
              ziyang
            </Col>
            <Col
              xs={{ span: 6 }}
              md={{ span: 4 }}
              lg={{ span: 3 }}
              title="文章标签"
            >
              <i className="fa fa-tags fa-lg fa-fw " aria-hidden="true"></i>
              标签
            </Col>
            <Col
              xs={{ span: 6 }}
              md={{ span: 4 }}
              lg={{ span: 3 }}
              title="浏览量"
            >
              <i className="fa fa-fw fa-lg fa-eye" aria-hidden="true"></i>
              1000
            </Col>
            <Col
              xs={{ span: 6 }}
              md={{ span: 4 }}
              lg={{ span: 3 }}
              title="点赞量"
            >
              <i
                className="fa fa-fw fa-lg fa-thumbs-o-up"
                aria-hidden="true"
              ></i>
              1000
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }} title="创作时间">
              <i className="fa fa-clock-o fa-lg fa-fw" aria-hidden="true"></i>
              2020-12-34 18:34:56
            </Col>
          </Row>
          <section
            id="zy-markdown-style"
            dangerouslySetInnerHTML={{ __html: html }}
          ></section>
        </Col>
      </Row>
    </Col>
  );
};

export default ArticleContent;
