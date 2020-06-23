import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";
import "./index.less";
export default class index extends Component {
  state = {
    currentDate: formatDate(new Date(), "YYYY.MM.DD hh:mm:ss"),
  };
  
  componentDidMount() {
    this.task();
  }

  task = () => {
    this.timer = setInterval(() => {
      this.setState({
        currentDate: formatDate(new Date(), "YYYY.MM.DD hh:mm:ss"),
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="index-wrapper">
        <div className="main">
          <h1>ziyang Blog</h1>
          <h2>Man Proposes , God Disposes</h2>
          <h3>{this.state.currentDate}</h3>
          <div className="tag">
            <div>And when I ponder snowflakes,</div>
            <div>never finding two the same.</div>
          </div>
          <Link to="/home">
            <button className="goto">
              Go To Blog <span>&gt;&gt;&gt;</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
