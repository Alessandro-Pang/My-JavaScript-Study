import React, { Component } from "react";

class TodoLink extends Component {
  render() {
    let link = this.props.link;

    return (
      <iframe
        src={link}
        style={{ width: "100%", overflow: "hidden", border: 0, height: "100%" }}
      ></iframe>
    );
  }
}

export default TodoLink;
