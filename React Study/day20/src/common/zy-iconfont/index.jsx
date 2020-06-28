/*
 * @Author: zi.yang
 * @Date: 2020-06-16 21:53:55
 * @LastEditTime: 2020-06-28 00:14:40
 * @LastEditors: Please set LastEditors
 * @Description: 自定义Icon ClassName 依赖于 font-awesome
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\common\zy-iconfont\index.jsx
 */ 

import React from "React";
import "./index.less";
function ZyIconFont(props) {
  /**
   * @description: icon 不应该继承太多的事件，目前只放开三个事件
   */
  const { onClick, onMouseOver, onMouseLeave } = props;
  const renderIcon = () => {
    const iconfont = props.iconfont.trim().toString();
    const checkClass = new RegExp(/^fa-(\d|\w|-)+\w$/);
    const testClassName = checkClass.test(iconfont);
    if (testClassName) {
      return (
        <i
          className={"fa fa-fw zy-iconfont " + iconfont}
          aria-hidden="true"
          onClick={(e) => {
            onClick && onClick(e);
          }}
          onMouseOver={(e) => {
            onMouseOver && onMouseOver(e);
          }}
          onMouseLeave={(e) => {
            onMouseLeave && onMouseLeave(e);
          }}
        />
      );
    } else {
      return (
        <i
          className="fa fa-fw zy-iconfont"
          aria-hidden="true"
          onClick={(e) => {
            onClick && onClick(e);
          }}
          onMouseOver={(e) => {
            onMouseOver && onMouseOver(e);
          }}
          onMouseLeave={(e) => {
            onMouseLeave && onMouseLeave(e);
          }}
          dangerouslySetInnerHTML={{__html: iconfont}}
        >
        </i>
      );
    }
  };
  return renderIcon();
}

export default ZyIconFont;
