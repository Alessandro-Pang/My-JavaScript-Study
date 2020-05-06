import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 1,
    };
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }
  onChangeMessage() {
    let message = this.input.value;
    this.setState({
      message: Number(message),
    });
  }

  render() {
    let counterStyles = {
      width: 170,
      height: 150,
      border: "1px solid red",
      fontSize: 18,
      color: "orange",
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,.7)",
      lineHeight: "140px",
    };
    return (
      <div>
        <button
          onClick={() => {
            this.props.onClickAdd(this.state.message);
          }}
        >
          增加
        </button>
        <button
          onClick={() => {
            this.props.onClickSub(this.state.message);
          }}
        >
          减少
        </button>
        <br />
        <input
          type="text"
          ref={(input) => (this.input = input)}
          defaultValue="1"
          onChange={() => {
            this.onChangeMessage();
          }}
        />
        <div style={counterStyles}>{this.props.counter}</div>
      </div>
    );
  }
}
