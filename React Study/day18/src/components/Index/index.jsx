import React, { Component } from "react";
import { Layout, Menu } from "antd";
import TodoLink from "./TodoLink";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Sys_menu from "@/Sys_menu"
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import './index.css'


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      data: [],
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3300/db/menu_name")
      .then((res) => res.json())
      .then(res=>{
        this.setState(()=>({
          data:res
        }))
      }).catch(err=>{
        console.log(err)
      });
  }
  render() {
    return (
      <Layout>
        <Header style={{ height: "10vh", paddingLeft: 0 }}>
          <div
            id="logo"
            style={{ height: "7vh", width: "200px", paddingTop: "15px" }}
          >
            <div
              style={{
                height: "6vh",
                width: "150px",
                float: "left",
                fontSize: "23px",
                color: "white",
                textAlign: "center",
                lineHeight: "6vh",
              }}
            >
              Alex&nbsp;Analysis
            </div>
            <div
              style={{
                width: "50px",
                height: "6vh",
                float: "left",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
                lineHeight: "6vh",
                textAlign: "center",
              }}
            >
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
              style={{ width: "300px", height: "83vh"}}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <Menu theme="dark" mode="inline" defaultSelectedKeys="Sys_menu">
                <Menu.Item key="Sys_menu"  icon={<GlobalOutlined/>}>
                  <Link to="/Sys_menu" className="nav">Sys_menu</Link>
                </Menu.Item>
                {this.state.data.map((el) => (
                  <Menu.Item key={el.href} icon={<GlobalOutlined/>}>
                    <Link to={"/" + el.href} className="nav">
                      {el.navName}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Content style={{ overflow: "hidden" }}>
              <Switch>
                <Route key="Sys_menu" path="/Sys_menu">
                  <Sys_menu></Sys_menu>
                </Route>
                {this.state.data.map((el) => (
                  <Route key={el.href} path={"/" + el.href}>
                    <TodoLink link={el.link}></TodoLink>
                  </Route>
                ))}
              </Switch>
            </Content>
          </Router>
        </Layout>
        <Footer
          style={{
            margin: 0,
            padding: 0,
            height: "7vh",
            textAlign: "center",
            background: "#aaa",
          }}
        >
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
