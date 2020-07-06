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
  useEffect(() => {
    const { actions, articleList } = props;
    actions.get_findArticle(typename, typeValue);
    // let canvas = document.getElementById("canvas");
    // let ctx = canvas.getContext("2d");
    // ctx.font="30px Arial";
    // ctx.strokeText(typename,10,50);
  });
  const eachCard = () => {
    const { rows } = props.articleList;
    if (!rows) return <></>;
    return rows.map((items) => (
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
      lg={{ span: 14, offset: 2 }}
      md={{ span: 14, offset: 2 }}
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 20, offset: 2 }}
      className=""
    >
      {/* <Row style={{marginTop:10}}>
        <canvas id="canvas"  height="150px" style={{background:"#ccc"}}></canvas>
      </Row> */}
      <Row style={{ width: "100%" }}>{eachCard()}</Row>
    </Col>
  );
};

export default FindArticle;
