import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Redirect } from "react-router-dom"
import "./loginBox.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class index extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(value) {
    if (!value.username && !value.password) {
      return alert("请输入用户名密码！");
    }
    fetch("http://127.0.0.1:3300/db/login", {
      method: "POST",
      mode: "cors", //跨域请求
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res[0].login) {
          document.cookie="usernaem="+value.username+";expires="+10000;
          return (
            location.href="/index"
          )
        }
        return alert("登录失败");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Form id="loginBox-form" name="basic" onFinish={this.handleLogin}>
        <Form.Item>
          <h1>
            <strong>大数据可视化分析系统</strong>
          </h1>
          <h2>
            <em>Visualization Analysis</em>
          </h2>
        </Form.Item>

        <Form.Item name="username">
          <Input addonBefore={<UserOutlined />} placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            addonBefore={<LockOutlined />}
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default index;
