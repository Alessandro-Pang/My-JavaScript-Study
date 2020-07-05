import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { useLocation, useParams } from "react-router-dom";
const FindArticle = () => {
  const { pathname } = useLocation();
  const { type } = useParams();
  const path = "/blog/find/article/";
  const len = pathname.length - (path.length + type.length) -1;
  const typename = pathname.substr(path.length, len);
  useEffect(()=>{
    // findArticleByType ---> 
    //  select typename from tab where typename = type group by typename order by typename desc
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font="30px Arial";
    ctx.strokeText("ziYang BlogziYang BlogziYang Blog",10,50);
  })
  return (
    <Col span={24}>
      <Row >
        <canvas id="canvas"  height="150px" style={{background:"#ccc"}}></canvas>
      </Row>
      <Row>
        
      </Row>
    </Col>
  );
};

export default FindArticle;
