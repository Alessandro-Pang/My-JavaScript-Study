import React, { Component } from 'react'
import './Loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-model">
        <div className="loading">
          <h2>加载中。。。。</h2>
        </div>
      </div>
    )
  }
}
