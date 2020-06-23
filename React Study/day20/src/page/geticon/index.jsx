/*
 * @Author: zi.yang
 * @Date: 2020-06-20 19:52:43
 * @LastEditTime: 2020-06-23 21:27:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\page\geticon\index.jsx
 */

import React, { PureComponent } from "react";
import iconfont from "../../static/iconfont/fonts/fontawesome-webfont.svg";
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      icon: [],
    };
  }
  handleClickGetIcon = (event) => {
    console.log(event.target.getAttribute("unicode"));
  };
  componentDidMount() {
    fetch(iconfont)
      .then((res) => res.text())
      .then((res) => {
        const glyphName = res.match(/name="(\w|-|_)+"/g);
        const unicode = res.match(/&#(\d|\w|-)+;/g);
        const className = glyphName.map((item) =>
          item.replace(/(name=|"|)/g, "").replace(/_/g, "-")
        );

        const list = unicode.map((val, index) => (
          <li
            key={val}
            style={{
              float: "left",
              listStyle: "none",
              cursor: "pointer",
              margin: "0 5px",
            }}
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
        let glyphBox = new Array();
        let temp = new Array();
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
