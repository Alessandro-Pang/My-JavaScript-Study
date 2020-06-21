/*
 * @Author: zi.yang
 * @Date: 2020-06-20 19:52:43
 * @LastEditTime: 2020-06-21 01:02:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\page\geticon\index.jsx
 */

import React, { Component } from "react";
import "../../static/icon/css/font-awesome.min.css";
import iconfont from "../../static/icon/fonts/fontawesome-webfont.svg";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: [],
    };
  }
  handleClickGetIcon = (e) => {
    console.log(e.target.getAttribute("unicode"));
  };
  componentDidMount() {
    fetch(iconfont)
      .then((res) => res.text())
      .then((res) => {
        const glyphName = res.match(/name="(\w|-|_)+"/g);
        const unicode = res.match(/&#(\d|\w)+;/g);
        const className = glyphName.map((item) =>
          item.replace(/(name=|"|)/g, "").replace(/_/g, "-")
        );

        const list = unicode.map((val, index) => (
          <li
            key={val}
            style={{ float: "left", listStyle: "none", margin: "0 5px" }}
          >
            <i
              unicode={val}
              aria-hidden="true"
              glyphName={className[index]}
              className="fa fa-fw fa-2x"
              dangerouslySetInnerHTML={{ __html: val }}
              onClick={this.handleClickGetIcon}
            ></i>
          </li>
        ));
        let glyphBox = [];
        let temp = [];
        for (let i = 1; i <= list.length; i++) {
          if (i % 10 === 0) {
            temp.push(list[i - 1]);
            glyphBox.push(
              <ol
                key={"glyph-ol-" + i}
                style={{ display: "block", width: "100%" }}
              >
                {temp}
              </ol>
            );
            temp = [];
          } else {
            temp.push(list[i - 1]);
          }
        }
        this.setState({
          icon: glyphBox,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "max-content",
        }}
      >
        {this.state.icon}
      </div>
    );
  }
}
