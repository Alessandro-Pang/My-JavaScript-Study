/*
 * @Author: zi.yang
 * @Date: 2020-06-20 19:52:43
 * @LastEditTime: 2020-06-20 22:56:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\page\geticon\index.jsx
 */

import React, { Component } from "react";
import iconfont from "../../static/font/iconfont.svg";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: [],
    };
  }

  componentDidMount() {
    fetch(iconfont)
      .then((res) => res.text())
      .then((res) => {
        const glyphName = res.match(/name="(\w|-)+"/g);
        const unicode = res.match(/&#\d+;/g);
        const className = glyphName.map((item) =>
          item.replace(/(name=|\")/g, "")
        );

        const list = unicode.map((val, index) => (
          <li key={val} style={{ float: "left", listStyle: "none" ,margin:"0 5px"}}>
            <i
              style={{fontSize:"22px"}}
              className={"iconfont icon-" + className[index]}
              glyphName={className[index]}
              unicode={val}
            ></i>
          </li>
        ));
        let glyphBox = [];
        let temp = [];
        for (let i = 0; i < list.length; i++) {
          if (i % 10 === 0 && i !== 0) {
            temp.push(list[i]);
            glyphBox.push(<ol style={{ display: "block" ,width:"300px"}}>{temp}</ol>);
            temp=[];
          } else {
            temp.push(list[i]);
          }
        }
        this.setState({
          icon: glyphBox,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return <div>{this.state.icon}</div>;
  }
}
