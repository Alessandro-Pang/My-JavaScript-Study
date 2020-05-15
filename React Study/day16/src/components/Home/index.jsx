import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./home.css";
import Rows from "../Row-Col";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Abc extends Component {
  render() {
    return (
      <div>
        <iframe
          style={{ width: "100%", height: "calc(100vh - 50px)" }}
          src={this.props.url}
        ></iframe>
      </div>
    );
  }
}

export default class index extends Component {
  render() {
    return (
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Header>header</Header>
          <Layout>
            <Sider style={{ height: "calc(100vh - 50px)", overflow: "auto" }}>
              <Menu theme="dark" mode="inline" defaultSelectedKeys="main">
                <Menu.Item key="main">
                  <Link to="/main">系统首页</Link>
                </Menu.Item>
                <SubMenu title="管理员菜单">
                  <Menu.Item>管理员列表</Menu.Item>
                  <Menu.Item>权限管理</Menu.Item>
                  <Menu.Item>任务管理</Menu.Item>
                </SubMenu>
                <Menu.Item>
                  <Link to="/main/abc">菜单列表</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/main/system">系统日志</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/main/king">领导驾驶舱</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/main/longer">大屏可视化</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/main/console">综合分析台</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content>
              <Switch>
                <Route path="/main" exact>
                  <Rows></Rows>
                </Route>
                <Route path="/main/abc">
                  <Abc url="https://blog.csdn.net/smilecold/article/details/80492438"></Abc>
                </Route>
                <Route path="/main/system">
                  <Abc url="https://echarts.apache.org"></Abc> 
                </Route>
                <Route path="/main/system">
                  <Abc url="https://echarts.apache.org/zh/download.html"></Abc> 
                </Route>
                <Route path="/main/king">
                  <Abc url="https://www.cnblogs.com/"></Abc> 
                </Route>
                <Route path="/main/longer">
                  <Abc url="http://www.yyyweb.com/"></Abc> 
                </Route>
                <Route path="/main/console">
                  <Abc url="http://www.uimaker.com/uimakerhtml/uidesign/uisoft/2015/0511/118428.html"></Abc> 
                </Route>
              </Switch>
            </Content>
          </Layout>
          {/* <Footer>footer</Footer> */}
        </Layout>
      </Router>
    );
  }
}
