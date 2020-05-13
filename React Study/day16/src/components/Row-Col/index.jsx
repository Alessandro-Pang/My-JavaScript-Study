/*
 * @Author: your name
 * @Date: 2020-05-12 08:25:51
 * @LastEditTime: 2020-05-12 21:47:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day16\src\components\Row-Col\index.js
 */
import React, { Component ,Fragment} from 'react';
import {Col,Row} from 'antd';
import './index.css';

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Row className="learing">
          <Col style={{background:"yellow"}} span={24}>span = 24</Col>
        </Row>
        <Row className="learing">
          <Col style={{background:"rgb(0,255,100)"}} span={12}>span = 12</Col>
          <Col style={{background:"orange"}} span={12}>span = 12</Col>
        </Row> 
        <Row className="learing">
          <Col span={8}>三列布局,span = 8</Col>
          <Col span={8}>三列布局,span = 8</Col>
          <Col span={8}>三列布局,span = 8</Col>
        </Row> 
        <Row className="learing">
          <Col span={6}> 四列布局 , span=6</Col>
          <Col span={6}> 四列布局 , span=6</Col>
          <Col span={6}> 四列布局 , span=6</Col>
          <Col span={6}> 四列布局 , span=6</Col>
        </Row>
        <Row className="learing">
          <Col span={4}>六列布局，span=4</Col>
          <Col span={4}>六列布局，span=4</Col>
          <Col span={4}>六列布局，span=4</Col>
          <Col span={4}>六列布局，span=4</Col>
          <Col span={4}>六列布局，span=4</Col>
          <Col span={4}>六列布局，span=4</Col>
        </Row>
        <Row className="learing">
          <Col span={3}>span=3</Col>
          <Col span={3}>span=3</Col>
          <Col span={3}>span=3</Col>
          <Col span={3}>span=3</Col>
          <Col span={3}>span=3</Col>
          <Col span={3}>span=3</Col>
          <Col span={3}>span=38</Col>
          <Col span={3}>span=3</Col>
        </Row>
        <Row className="learing">
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
          <Col span={2}>span=2</Col>
        </Row>
        <Row className="learing">
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
          <Col span={1}>span=1</Col>
        </Row>
      </Fragment>
    )
  }
}
