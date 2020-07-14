import React from "react";
import { Link,NavLink } from "react-router-dom";
import ZyIcon from "common/zy-iconfont";
import "./index.less";

const Tags = (props) => {
  const randomInt = (from, to) => {
    return parseInt(Math.random() * (to - from + 1) + from);
  };
  const handleMouseOver = (event) => {
    const ele =
      event.target.nodeName === "I" || event.target.nodeName === "A"
        ? event.target.parentElement
        : event.target;
    const color = ele.style.borderColor;
    ele.style.boxShadow = `0 0 7px ${color}`;
  };
  const handleMouseLeave = (event) => {
    const ele =
      event.target.nodeName === "I" || event.target.nodeName === "A"
        ? event.target.parentElement
        : event.target;
    ele.style.boxShadow = "none";
  };
  const handleClick = (event) => {
    event.target.parentElement.firstChild.click();
  };
  const borderColor = `rgba(
    ${randomInt(100, 200)},
    ${randomInt(100, 200)},
    ${randomInt(100, 200)},
    ${(Math.random() * 10 + 3) / 10})`;
  //判断连接类型并渲染Router
  const linkRouter = () => {
    if (!props.link) {
      return <Link to={location.pathname}>{props.tagName}</Link>;
    }
    const link = props.link;
    const isHttp =
    link.slice(0, 8) === "https://" || link.slice(0, 7) === "http://" ? true : false;
    if (isHttp) {
      return <a target="_bank" href={link}>{props.tagName}</a>;
    } else {
      return <NavLink to={link}>{props.tagName}</NavLink>;
    }
  };
  return (
    <li
      className="zy-tag"
      style={{ borderColor }}
      onMouseOver={(e) => handleMouseOver(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      {linkRouter()}
      <ZyIcon  onClick={handleClick} iconfont={props.icon} />
    </li>
  );
};

export default Tags;
