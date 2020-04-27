/*
 * @Author: your name
 * @Date: 2020-04-27 08:46:27
 * @LastEditTime: 2020-04-27 23:19:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day08\webpack-react\src\entry.js
 */
// react,react-dom 均为小写
const React = require("react");
const ReactDOM = require("react-dom");
import MyRouter from "./component/MyRouter";
const {  Layout, Menu, Breadcrumb  } = require("antd") ;
const { Header, Content, Footer } = Layout;
import './css/entry.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>   
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
