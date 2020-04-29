import React, { Component } from "react";

class BranshChildern extends Component {
  constructor(props) {
    super(props);
  }

  sectionType(type) {
    switch (type) {
      case "share":
        return { styles: { backgroundColor: "rgba(0,80,200)" }, label: "分享" };
      case "ask":
        return { styles: { backgroundColor: "rgba(180,180,180)" }, label: "问答" };
      case "job":
        return { styles: { backgroundColor: "rgba(0,180,60)" }, label: "招聘" };
      case "good":
        return { styles: { backgroundColor: "rgba(200,80,100)" }, label: "精华" };
    }
  }

  render() {
    let element = this.props.content;
    let at = element.create_at;
    let create_date = at.substring(0, 10);
    let authorName = element.author.loginname;
    let authorUrl = element.author.avatar_url;
    let tab = this.sectionType(element.tab);
    return (
      <div>
        <button onClick={this.props.onClick}>返回</button>
        <div className="blog-content">
          <h2 dangerouslySetInnerHTML={{ __html: element.title }}></h2>
          <div className="author-info">
            <div className="info">
              <button
                className="tab-btn"
                style={tab.styles}
                dangerouslySetInnerHTML={{ __html: tab.label }}
              ></button>
              <img
                style={{ width: "30px", borderRadius: "30px" }}
                src={authorUrl}
              />
              <b
                style={{ color: "rgba(0,80,200)" }}
                dangerouslySetInnerHTML={{ __html: authorName }}
              />
              &nbsp; 发表时间：
              <b dangerouslySetInnerHTML={{ __html: create_date }} />
            </div>
          </div>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: element.content }}></div>
        </div>
      </div>
    );
  }
}

export default BranshChildern;
