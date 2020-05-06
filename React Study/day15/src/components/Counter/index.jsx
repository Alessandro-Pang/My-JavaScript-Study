import React, { Component } from 'react'
import CounterButton from '@/CounterButton'

export default class index extends Component {
  render() {
    return (
      <div>
        {/* 
          一个块级元素
            一个计数显示
            两个按钮 ，加、减
        */}
        <CounterButton></CounterButton>
      </div>
    )
  }
}
