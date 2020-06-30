import React, { useEffect,Fragment } from "react";
import { Row, Col, Pagination } from "antd";
import "./index.less";
import ZyCard from "./zy-card";
import Logo from "src/static/logo.png";

const ArticleList = (props)=> {
  const {articleList,actions,page_size,page}=props;

  useEffect(()=>{
    if(!articleList.rows){
      actions.get_article_info(page,page_size)
    }
  })
  const eachCard = () =>{
    if (!articleList.rows) return ;
    return (
      articleList.rows.map((items)=>(
        <ZyCard
            key={items.article_id}
            title={items.article_title}
            link={"/blog/article/" + items.article_id}
            intro={items.article_intro}
            cover={items.article_cover||Logo}
            author={items.article_author}
            create_date={items.createdAt}
            pageView={items.pageview}
            likes={items.likes}
          />
      ))
    )
  };
    return (
      <Fragment>
        <Col
          lg={{ span: 14, offset: 2 }}
          md={{ span: 14, offset: 2 }}
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
        >
          {eachCard()}
          <Row
            className="zy-article-pagination"
          >
            <Pagination
              total={articleList.count}
              defaultCurrent={1}
              defaultPageSize={10}
              responsive
              hideOnSinglePage
              showSizeChanger
              showQuickJumper
              onChange = {(pageNum)=>actions.set_page(pageNum)}
              onShowSizeChange={(current,size)=>actions.set_page_size(size)}
            />
            {/* 你不会希望一页显示一百条的 */}
          </Row>
        </Col>
      </Fragment>
    );
}
export default ArticleList;