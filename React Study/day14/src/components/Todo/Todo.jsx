/*
 * @Author: your name
 * @Date: 2020-05-05 21:40:32
 * @LastEditTime: 2020-05-05 21:47:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day14\src\components\Todo\Todo.js
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? "line-through" : "none",
        }}
      >
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick:PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  text:PropTypes.string.isRequired
};

export default Todo;
