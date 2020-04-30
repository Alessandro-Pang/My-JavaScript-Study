import React, { Component } from "react";
import {Route} from "react-router-dom";
import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: [],
      showSection:""
    };
    this.loadingData = this.loadingData.bind(this);
  }

  componentDidMount() {
    this.loadingData();
  }

  onClickGetSectionse(ele){
    window.open(ele.html_url);
  }

  loadingData() {
    let elements = this.props.list.map((ele, index) => {
      return (
        <span
          onClick={()=>{this.onClickGetSectionse(ele)}}
          key={ele[this.props.id]}
          title={ele[this.props.prop]}
        >
          <b>{index + 1}.&nbsp;</b>
          <li>{ele[this.props.prop]}</li>
          <b style={{ color: "yellow" }}>★</b>
          <b>{ele.stargazers_count}</b>
        </span>
      );
    });
    this.setState({
      element: elements,
    });
  }

  render() {
    return (
      <div>
        <ul className="ranking-ul">{this.state.element}</ul>
      </div>
    );
  }
}
