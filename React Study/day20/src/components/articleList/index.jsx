import React, { Fragment, useEffect } from "react";
import { Row, Col, Pagination } from "antd";
import ZyCard from "@/zy-card";
import Logo from "src/static/logo.png";
import "./index.less";
import formatDate from "src/utils/date";
const ArticleList = (props) => {
  const {
    page,
    actions,
    page_size,
    articleList,
    articleLimit,
    handleClickUpdatePage,
  } = props;
  useEffect(() => {
    /**
     * react 警告Warning:
     *   Cannot update during an existing state transition (such as within `render`).
     * 报错的原因 是由于引用的子组件 通过props进行传递了
     * 传递的过程中实际上已经处于render阶段了 ，
     * 在这个阶段 如果你再改变这个state值的话 就会包这个错
     * 尽量不要在render的时候通过点击改变state
     * 解决方法：在声明周期的 Hook 中执行方法
     */
    if (articleList) {
      const data = articleList.rows.slice(0, 10);
      actions.article_limit_list(data);
    }
  },[articleList]);

  const eachCard = () => {
    if (!articleLimit) return <></>;
    return articleLimit.map((items) => (
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
    <Fragment>
      <Col
        lg={{ span: 14, offset: 2 }}
        md={{ span: 14, offset: 2 }}
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
      >
        {eachCard()}
        <Row className="zy-article-pagination">
          <Pagination
            total={(articleList && articleList.count) || 1}
            defaultCurrent={page || "1"}
            defaultPageSize={page_size || "10"}
            responsive
            showSizeChanger
            showQuickJumper
            onChange={(pageNum) => {
              handleClickUpdatePage({
                number: pageNum,
                type: "page",
                page,
                page_size,
                articleList,
              });
            }}
            onShowSizeChange={(current, size) => {
              handleClickUpdatePage({
                number: size,
                type: "size",
                page,
                page_size,
                articleList,
              });
            }}
          />
          {/* 你不会希望一页显示一百条的 */}
        </Row>
      </Col>
    </Fragment>
  );
};

export default ArticleList;
