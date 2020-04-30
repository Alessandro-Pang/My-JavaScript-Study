import React, { Component } from "react";
import axios from "axios";
import List from "../List/List";
import Loading from "../Loading/Loading";
import "./Home.css";
/**
 *  let a = [<div>AI</div>,<div>A1</div>,<div>A1</div>,<div>A1</div>,<div>A1</div>]
 *  JSX 模板中会自动遍历数组,所以如果不需要渲染HTML标签，则可以直接将数组放在 JSX字符串模板中
 */
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      result: [],
      type: this.props.location.query || "all",
      ajaxState: false,
    };

    this.ajaxResponse = this.ajaxResponse.bind(this);
    this.onClickNextPage = this.onClickNextPage.bind(this);

    this.listStyles = {};
  }

  componentDidMount() {
    this.ajaxResponse();
  }

  onClickNextPage() {
    this.ajaxResponse();
  }

  ajaxResponse() {
    this.setState({
      ajaxState: false,
    });
    axios
      .get(
        "https://api.github.com/search/repositories?q=" +
          this.state.type +
          "&page=" +
          this.state.page +
          "&sort=stars"
      )
      .then((res) => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
          result: res.data.items,
          ajaxState: true,
        }));
      })
      .catch((err) => {
        this.setState(() => ({
          ajaxState: true,
        }));
        console.error(new Error("接口数据获取失败！") + "\n" + err);
      });
  }

  render() {
    let ajaxState = this.state.ajaxState;

    //description
    return (
      <div className="ranking-list">
        <h2 className="ranking-titles">热门项目排行</h2>
        <button className="nextBtn" onClick={() => this.onClickNextPage()}>
          下一页
        </button>

        {ajaxState && (
          <List
            prop="name"
            id="id"
            ajaxState={ajaxState}
            List-styls={this.listStyles}
            list={this.state.result}
          ></List>
        )}

        {!ajaxState && <Loading />}
      </div>
    );
  }
}
