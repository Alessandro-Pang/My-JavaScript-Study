import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { useLocation, useParams } from "react-router-dom";
import Logo from "src/static/logo.png";
import { formatDate } from "src/utils";
import ZyCard from "@/zy-card";

const FindArticle = (props) => {
  const { pathname } = useLocation();
  const { type: typeValue } = useParams();
  const path = "/blog/find/article/";
  const len = pathname.length - (path.length + typeValue.length) - 1;
  const typename = pathname.substr(path.length, len);
  const { actions, articleList } = props;
  useEffect(() => {
    actions.get_findArticle(typename, typeValue);
  },[typeValue]);
  const eachCard = () => {
    if (!articleList) return <></>;
    return articleList.rows.map((items) => (
      <ZyCard
        key={items.article_id}
        title={items.article_title}
        link={"/blog/article/" + items.article_id}
        intro={items.article_intro}
        cover={items.article_cover || Logo}
        author={items.article_author}
        create_date={formatDate(items.createdAt, "YYYY-MM-DD")}
        pageView={items.pageview}
        likes={items.likes}
      />
    ));
  };
  return (
    <Col
      md={{ span: 14, offset: 2 }}
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 20, offset: 2 }}
    >
      <Row style={{height:145,justifyContent:'center',alignItems:'center'}}>
        {typeValue}
      </Row> 
      {eachCard()}
    </Col>
  );
};

export default FindArticle;
