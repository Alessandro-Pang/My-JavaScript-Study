import React, { Component } from 'react';

class TodoLink extends Component {
  render() {
    return (
      <iframe src={this.props.link}  style={{width:"100%",overflow:"hidden",border:0, height:"100%"}}></iframe>
    );
  }
}

export default TodoLink;
