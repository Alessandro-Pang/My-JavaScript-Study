import React, { Fragment } from "react";
import { Row, Col, Pagination } from "antd";
import "./index.less";
import ZyCard from "./zy-card";
import Logo from "src/static/logo.png";

class ArticleList extends React.PureComponent {
  componentDidMount() {
    const { actions, page, page_size } = this.props;
    actions.get_article_info(page, page_size);
  }
  handleClickUpdatePage(number, type) {
    const { actions,page, page_size } = this.props;
    // 不直接修改 state 对象
    let [newPage,new_size] = [page, page_size ];
    if (type === "page") {
      actions.set_page(number);
      newPage = number;
    } else if (type === "size") {
      actions.set_page_size(number);
      new_size = number;
    }
    actions.get_article_info(newPage,new_size);
  }

  eachCard = () => {
    const { articleList } = this.props;
    if (!articleList.rows) return;
    return articleList.rows.map((items) => (
      <ZyCard
        key={items.article_id}
        title={items.article_title}
        link={"/blog/article/" + items.article_id}
        intro={items.article_intro}
        cover={items.article_cover || Logo}
        author={items.article_author}
        create_date={items.createdAt}
        pageView={items.pageview}
        likes={items.likes}
      />
    ));
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
          <Row className="zy-article-pagination">
            <Pagination
              total={this.props.articleList.count}
              defaultCurrent={1}
              defaultPageSize={10}
              responsive
              showSizeChanger
              showQuickJumper
              onChange={(pageNum) => {
                this.handleClickUpdatePage(pageNum, "page");
              }}
              onShowSizeChange={(current, size) => {
                this.handleClickUpdatePage(size, "size");
              }}
            />
            {/* 你不会希望一页显示一百条的 */}
          </Row>
        </Col>
      </Fragment>
    );
  }
}

export default ArticleList;
