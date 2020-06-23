import React from "react";
import { Popover } from "antd";
import { Link } from "react-router-dom";
import "./index.less";
const HotArticleList = () => {
  const content = (
    <ul>
      <li>作者：子洋</li>
      <li>点赞量：880</li>
      <li>浏览量：1000</li>
      <li>点赞率：88%</li>
      {/* (点赞 / 阅读 * 100).toFixed(2) */}
      <li>创作时间：2020/12/23</li>
    </ul>
  );
  return (
    <ol className="zy-hot-article-list">
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">造成这个原因的因素很多:</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">浏览器显示的内容没有刷新:</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">浏览器显示的内容没有刷新:</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">浏览器显示的内容没有刷新浏览器显示的内容没有刷新:</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">浏览器显示的内容没有刷新浏览器显示的内容没有刷新:</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">浏览器显示的内容没有刷新:</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">浏览器显示的内容没有刷新:</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">造成这个原因的因素很多:浏览器显示的内容没有刷新</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">浏览器显示的内容没有刷新:浏览器显示的内容没有刷新</Link>
        </Popover>
      </li>
      <li>
        <Popover content={content} title="文章详情">
          <Link to="/home/article/">造成这个原因的因素很多造成这个原因的因素很多:</Link>
        </Popover>
      </li>
    </ol>
  );
};

export default HotArticleList;
