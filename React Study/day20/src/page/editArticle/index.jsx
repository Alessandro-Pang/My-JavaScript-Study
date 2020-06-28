import React, { useEffect, Fragment } from "react";
import { Row, Col, Form, Input } from "antd";
import "mditor/dist/js/mditor";
import Header from "container/header";
import "./index.less";

const editArticle = () => {
  //保存事件
  const handleClickSubmit = () => {
    const value = document.getElementById("markdown").value;
    // const value = document.querySelector('.markdown-body').innerHTML;
    /**
     *  允许在markdown中嵌入Html元素，包括但不限于：video,div,span;
     *   但不允许以下标签渲染，即便可以再编写时渲染出来script,input,textarea,iframe,frame,button,submit,form
     */
    const checkValue = value.match(
      /(<\/?(script|input|textarea|iframe|frame|button|submit|form)(\s|\w|=|\d|\W)*?>)/gi
    );
    if (!checkValue) return value;
    const result = checkValue.map((items) => {
      const text = items.match(/^<\/?\w+/gi);
      const result = items.replace(items, `&lt;${text[0].slice(1)}&gt;`);
      return result;
    });
    return result;
  };
  //监听 ctrl + s事件
  const listenerKeydown = (e) => {
    if (
      e.keyCode == 83 &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
    }
  };

  //window事件绑定
  window.addEventListener("keydown", (e) => listenerKeydown(e), true);
  useEffect(() => {
    const mditor = window.Mditor.fromTextarea(
      document.getElementById("markdown")
    );

    mditor.on("ready", function () {
      const tools = mditor.toolbar;
      tools.removeItem("help");
      tools.removeItem("toggleSplit");
      tools.removeItem("togglePreview");

      tools.addItem({
        name: "save",
        title: "保存",
        key: "ctrl+s",
        handler: () => handleClickSubmit(),
      });
    });

    return () => {
      window.removeEventListener("keydown", (e) => listenerKeydown(e), true);
    };
  });
  return (
    <Fragment>
      <Header></Header>
      <Row>
        <Col span={24} className="zy-markdown-textarea">
          <Form>
            <Row>
              <Form.Item>
                <Input placeholder="文章标题"></Input>
              </Form.Item>
            </Row>
              <textarea cols={24} id="markdown"></textarea>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default editArticle;
