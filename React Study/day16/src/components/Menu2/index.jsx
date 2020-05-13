import React, { Component } from "react";
import { Layout, Menu } from "antd";
import "./index.css";
const { SubMenu } = Menu;
const { Header, Sider, Footer, Content } = Layout;

export default class index extends Component {
  constructor(props){
    super(props)
    this.state={
      ele:['首页'],
      selectedkeys:["index"]
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(e){
    console.log(e);
    let es = this.state.ele;
    es.push(e.item.props.children),
    this.setState(()=>({
      ele :es, 
      selectedkeys:e.key
    }))
  }
  render() {
    return (
      <Layout className="my-lay">
        <Header className="header">
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key={this.state.selectedkeys}>{this.state.ele}</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider>
            <Menu theme="dark" ref="i" selectedKeys={this.state.selectedkeys} onClick={this.toggleMenu}>
              <Menu.Item key="index">首页</Menu.Item>
              <Menu.Item key="drugs">次均药费</Menu.Item>
              <Menu.Item key="feer">医疗收入</Menu.Item>
              <Menu.Item key="vvv">药占比</Menu.Item>
              <Menu.Item key="act">领导驾驶舱</Menu.Item>
            </Menu>
          </Sider>
          <Content>1111</Content>
        </Layout>
        <Footer>中央处理人</Footer>
      </Layout>
    );
  }
}
