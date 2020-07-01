import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Mditor from "mditor";
import "./index.less";
import { useParams } from "react-router-dom";

const ArticleContent = (props) => {
  const parser = new Mditor.Parser();
  const { articleInfo } = props;
  const { id } = useParams();

  useEffect(() => {
    const aid = articleInfo.article_id;
    console.log(1)
    if (!aid || aid !== id << 0) {
      props.actions.get_article_info(id);
    }
  });

  const {
    article_title,
    article_details,
    article_author,
    tag_name,
    createdAt,
    pageview,
    likes,
  } = articleInfo;
  const html = parser.parse(article_details || "");

  return (
    <Col span={24} id="zy-article-content">
      <Row className="zy-markdown">
        <Col span="24">
          <h1 className="zy-article-title">{article_title}</h1>
          <Row className="zy-article-info">
            <Col
              xs={{ span: 6 }}
              md={{ span: 4 }}
              lg={{ span: 3 }}
              title="文章作者"
            >
              <i className="fa fa-user fa-lg fa-fw " aria-hidden="true"></i>
              {article_author}
            </Col>
            <Col
              xs={{ span: 6 }}
              md={{ span: 4 }}
              lg={{ span: 3 }}
              title="文章标签"
            >
              <i className="fa fa-tags fa-lg fa-fw " aria-hidden="true"></i>
              {tag_name}
            </Col>
            <Col
              xs={{ span: 6 }}
              md={{ span: 4 }}
              lg={{ span: 3 }}
              title="浏览量"
            >
              <i className="fa fa-fw fa-lg fa-eye" aria-hidden="true"></i>
              {pageview}
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
              {likes}
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }} title="创作时间">
              <i className="fa fa-clock-o fa-lg fa-fw" aria-hidden="true"></i>
              {createdAt}
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
