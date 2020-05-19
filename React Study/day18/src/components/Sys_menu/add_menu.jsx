import React, { Component } from 'react'
import {Form,Input,Button} from "antd";
import './add_menu.css'
export default class add_menu extends Component {

  render() {
    return (
      <Form className="add_menu-form" name="basic" onFinish={this.props.handleAddMenu}>
        <Form.Item name="navName" key="key1">
          <Input placeholder="导航名称" ></Input>
        </Form.Item>
        <Form.Item name="href" key="key2">
          <Input placeholder="导航路由"></Input>
        </Form.Item>
        <Form.Item  name="link" key="key3">
          <Input placeholder="导航链接"></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
}
