/*
 * @Author: your name
 * @Date: 2020-05-05 19:23:37
 * @LastEditTime: 2020-05-05 19:31:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day11\app\src\component\Todo\index.js
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
Todo.propTypes={
  onClick:PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  text:PropTypes.string.isRequired
}

export default Todo;