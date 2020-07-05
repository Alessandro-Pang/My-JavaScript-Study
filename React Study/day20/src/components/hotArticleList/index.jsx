import React from "react";
import { Popover } from "antd";
import { Link } from "react-router-dom";
import formatDate from "src/utils/date";
import "./index.less";
const HotArticleList = (props) => {
  const { hotList } = props;

  const eachHotList = (hotList) =>
    hotList.map((items) => {
      if (!items.article_id) return <></>;
      const likeRate = (
        ((items.likes << 0) / (items.pageview << 0)) *
        100
      ).toFixed(2);
      const content = (
        <ul
          key={"hot_article_descript-" + items.article_id}
          className="zy-popover"
        >
          <li>作者：{items.article_author}</li>
          <li>点赞量：{items.likes}</li>
          <li>浏览量：{items.pageview}</li>
          <li>点赞率：{isNaN(likeRate) ? "0%" : likeRate + "%"}</li>
          <li>创作时间：{formatDate(items.createdAt, "YYYY-MM-DD")}</li>
        </ul>
      );
      return (
        <li key={"hot_article_list-" + items.article_id}>
          <Popover content={content} title="文章详情">
            <Link to={"/blog/article/" + items.article_id}>
              {items.article_title}
            </Link>
          </Popover>
        </li>
      );
    });
  return <ol className="zy-hot-article-list">{eachHotList(hotList)}</ol>;
};

export default HotArticleList;
