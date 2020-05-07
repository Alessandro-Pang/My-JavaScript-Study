import React, { Component } from 'react'
import {precss,abc} from './index.css'

export default class index extends Component {
  render() {
    return (
      <div>
        <div className={precss}>
          <span>这是一段话。。。。。</span>
          <div className={abc}>
            abc
          </div>
        </div>
      </div>
    )
  }
}
