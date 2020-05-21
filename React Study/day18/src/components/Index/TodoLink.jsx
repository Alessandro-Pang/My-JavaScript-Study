import React, { Component } from "react";
class TodoLink extends Component {
  render() {
    let link = this.props.link;

    return <iframe className="todolink-iframe" src={link}></iframe>;
  }
}

export default TodoLink;
