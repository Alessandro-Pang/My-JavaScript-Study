import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Sys_menu from "src/containers/Sys_menu";
const { Header, Sider, Content, Footer } = Layout;
import Icon from "./Icon";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
  ChromeOutlined,
  TaobaoCircleOutlined,
} from "@ant-design/icons";

import "./index.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      data: [],
      show: true,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
      // show:!this.state.show
    });
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3300/db/menu_name")
      .then((res) => res.json())
      .then((res) => {
        this.setState(() => ({
          data: res,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <Layout>
        <Header className="index-header">
          <div id="logo">
            <div className="logo-name">Alex&nbsp;Analysis</div>
            <div className="menu-icon">
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </div>
          </div>
        </Header>
        <Layout>
          <Router>
            <Sider
              className="index-sider-menu"
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <Menu theme="dark" mode="inline" defaultSelectedKeys="Sys_menu">
                <Menu.Item key="Sys_menu" icon={<ChromeOutlined />}>
                  <Link to="/Sys_menu" className="nav">
                    Sys_menu
                  </Link>
                </Menu.Item>
                {this.state.data.map((el) => (
                  <Menu.Item key={el.href} icon={Icon[el.icon]}>
                    <Link to={"/" + el.href} className="nav">
                      {el.navName}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Content className="index-content">
              <Switch>
                <Route key="Sys_menu" path="/Sys_menu">
                  <Sys_menu></Sys_menu>
                </Route>
                {this.state.data.map((el) => (
                  <Route key={el.href} path={"/" + el.href}>
                    <iframe className="todolink-iframe" src={el.link}></iframe>
                  </Route>
                ))}
              </Switch>
            </Content>
          </Router>
        </Layout>
        <Footer className="index-footer">
          <div>&copy;http://www.alexpang.cn</div>
          <div>
            Powered By{" "}
            <a target="_blank" href="http://www.alexpang.cn">
              Pangchaoyue
            </a>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default index;
