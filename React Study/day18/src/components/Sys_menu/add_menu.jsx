import React from "react";
import { Card, Form, Input, Button } from "antd";
import "./add_menu.css";
export default function add_menu(props) {
  const { handleAddMenu } = props;
  return (
    <Card title="添加菜单" bordered={true} className="add_menu_card">
      <Form className="add_menu-form" name="basic" onFinish={handleAddMenu}>
        <Form.Item name="navName" key="key1">
          <Input placeholder="导航名称"></Input>
        </Form.Item>
        <Form.Item name="href" key="key2">
          <Input placeholder="导航路由"></Input>
        </Form.Item>
        <Form.Item name="link" key="key3">
          <Input placeholder="导航链接"></Input>
        </Form.Item>
        <Form.Item name="icon" key="key4">
          <Input placeholder="Icon"></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="add_menu_submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
