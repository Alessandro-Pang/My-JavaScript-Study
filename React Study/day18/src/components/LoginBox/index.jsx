import React from "react";
import { Form, Input, Button } from "antd";
import "./loginBox.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function index(props) {
  return (
    <Form id="loginBox-form" name="basic" onFinish={props.handleLogin}>
      <Form.Item>
        <h1>
          <strong>大数据可视化分析系统</strong>
        </h1>
        <h2>
          <em>Visualization Analysis</em>
        </h2>
      </Form.Item>

      <Form.Item name="username">
        <Input
          addonBefore={<UserOutlined />}
          placeholder="请输入用户名"
          autoComplete="true"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password
          addonBefore={<LockOutlined />}
          placeholder="请输入密码"
          autoComplete="true"
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

export default index;
