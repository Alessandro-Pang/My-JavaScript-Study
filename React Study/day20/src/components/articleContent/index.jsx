import { Row, Col } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.less";
import "highlight.js/styles/vs2015.css";

const ArticleContent = (props) => {
  const { articleInfo } = props;
  const { id } = useParams();
  useEffect(() => {
    //每次打开路由隐性清空缓存数据
    props.actions.article_info("");
    //加载新的数据
    props.actions.get_article_info(id);
  }, [id])
  if (!articleInfo) return <></>;
  const {
    article_title,
    article_details,
    article_author,
    tag_name,
    createdAt,
    pageview,
    likes,
  } = articleInfo;
  const html = article_details || "";
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
            <Col xs={{ span: 6 }} md={{ span: 4 }} title="文章标签">
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
            <Col xs={{ span: 24 }} lg={{ span: 8 }} title="创作时间">
              <i className="fa fa-clock-o fa-lg fa-fw" aria-hidden="true"></i>
              {createdAt}
            </Col>
          </Row>
          <section
            className="zy-markdown-style"
            dangerouslySetInnerHTML={{
              __html: html.replace(/<pre>/g, '<pre class="hljs">'),
            }}
          ></section>
        </Col>
      </Row>
    </Col>
  );
};

export default ArticleContent;
