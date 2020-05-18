import React, { Component } from "react";
import { Layout, Menu } from "antd";
import TodoLink from "./TodoLink";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
import { MenuFoldOutlined,MenuUnfoldOutlined, GlobalOutlined } from "@ant-design/icons";
class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed:false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
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
              {/* <MenuFoldOutlined /> */}
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            </div>
          </div>
        </Header>
        <Layout>
          <Router>
            <Sider
              style={{ width: "300px", minHeight: "83vh" }}
              trigger={null} collapsible collapsed={this.state.collapsed}
            >
              <Menu theme="dark" mode="inline">
                <Menu.Item key="route1" icon={<GlobalOutlined/>}>
                  <Link to="/route1" style={{width:'100%',height:"100%" ,color:"white"}}>百度</Link>
                </Menu.Item>
                <Menu.Item key="route2" icon={<GlobalOutlined/>}>
                  <Link to="/route2"  style={{width:'100%',height:"100%" ,color:"white"}}>
                    alexpang
                  </Link>
                </Menu.Item>
                <Menu.Item key="route3" icon={<GlobalOutlined />}>
                  <Link to="/route3" style={{width:'100%',height:"100%" ,color:"white"}}>
                    ismepangcy
                  </Link>
                </Menu.Item>
                <Menu.Item key="route4" icon={<GlobalOutlined />}>
                  <Link to="/route4" style={{width:'100%',height:"100%" ,color:"white"}}> 
                    temp node
                  </Link>
                </Menu.Item>
                <Menu.Item key="route5" icon={<GlobalOutlined />} >
                  <Link to="/route5" style={{width:'100%',height:"100%" ,color:"white"}}>
                    temp node api
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ overflow: "hidden" }}>
              <Switch>
                <Route path="/route1">
                  <TodoLink link="http://www.baidu.com"></TodoLink>
                </Route>
                <Route path="/route2">
                  <TodoLink link="http://www.alexpang.cn"></TodoLink>
                </Route>
                <Route path="/route3">
                  <TodoLink link="http://www.ismepangcy.xyz"></TodoLink>
                </Route>
                <Route path="/route4">
                  <TodoLink link="http://127.0.0.1:3300/"></TodoLink>
                </Route>
                <Route path="/route5">
                  <TodoLink link="http://127.0.0.1:3300/db/queryUser?username=庞超"></TodoLink>
                </Route>
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
