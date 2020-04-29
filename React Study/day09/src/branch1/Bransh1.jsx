/*
 * @Author: your name
 * @Date: 2020-04-28 13:45:01
 * @LastEditTime: 2020-04-29 00:26:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day09\src\branch1\Bransh1.js
 */
import React, { Component } from "react";
import axios from "axios";
import BranshChildern from "./BranshChildern";
import "./Bransh1.css";

class Bransh1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      show: true,
      findContent: "",
    };
  }

  componentDidMount() {
    let _this = this;

    axios
      .get("https://cnodejs.org/api/v1/topics?mdrender=true")
      .then((res) => {
        _this.setState({
          result: res.data.data,
        });
      })
      .catch((err) => {
        console.error(new Error("axios 访问接口失败") + "\n" + err);
      });
  }

  onClickLookContent(element) {
    this.setState({
      show: !this.state.show,
      findContent: element,
    });
  }

  render() {
    let element = this.state.result.map((ele) => (
      <li
        className="contents"
        key={ele.id}
        dangerouslySetInnerHTML={{ __html: ele.title }}
        onClick={() => this.onClickLookContent(ele)}
      ></li>
    ));
    if (this.state.show) {
      return (
        <div>
          <ol>{element}</ol>
        </div>
      );
    } else {
      return (
        <div>
          <BranshChildern
            content={this.state.findContent}
            onClick={() => this.setState({ show: !this.state.show })}
          />
        </div>
      );
    }
  }
}

export default Bransh1;
