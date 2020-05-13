import React, { Component, Fragment } from "react";
import { Menu, Button, Row, Col } from "antd";
const { SubMenu } = Menu;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current:"key1",
    };
  }
  /**
   * Menu 是导航栏组件
   *  Menu 返回多个子组件 ,其中包括且不限于： SubMenu ,Item
   */
  handleClick(e){
    this.setState({
      current:e.key
    })
  }
  render() {
    return (
      <Fragment>
        <Row> 
          <Col span={24} >
            {/* 
          1、如果Menu需要折叠，那么就不可以给Menu设置固定width 
          2、ruguo 你需要折叠，那么需要将模式(mode)设置为Inline
          3、注意这里是给组件注册事件，不是给原生DOM元素注册事件，所以这里的onChange事件的属性名是：onOpenChange
        */}
            <Menu 
              mode="horizontal"
              //选择主题
              theme="dark"
              // 设置默认选择项
              // defaultSelectKeys={["key1"]}
              selectedKeys={[this.state.current]}
              // 选择默认打开字标签项
              // defaultOpenKeys={["sub1"]}
              // openKeys={this.state.openKeys}
              // inlineCollapsed={this.state.collapsed}
              onClick={this.handleClick.bind(this)}
              // onOpenChange={this.onOpenChange.bind(this)}
            >

              <Menu.Item key="key1">系统首页</Menu.Item>
              <Menu.Item key="key2">领导驾驶舱</Menu.Item>
              <Menu.Item key="key3">智慧医疗</Menu.Item>
              <SubMenu title="智慧社区" key="sub1">
                <Menu.ItemGroup title="病区">
                  <Menu.Item key="sub1-key1">孙村病房</Menu.Item>
                  <Menu.Item key="sub1-key2" >龚家病房</Menu.Item>
                </Menu.ItemGroup>  
                <Menu.ItemGroup title="药房">
                  <Menu.Item key="cc">
                    信谊大药房
                  </Menu.Item>
                  <Menu.Item key="cb">
                    连锁大药房
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu title="林校社区" key="sub2">
                <Menu.Item key="sub2-key1">孙村病房</Menu.Item>
                <Menu.Item key="sub2-key2" >龚家病房</Menu.Item>
              </SubMenu>
              <SubMenu title="门急诊" key="sub3">
                <Menu.Item key="sub3-key1">孙村病房</Menu.Item>
                <Menu.Item key="sub3-key2" >龚家病房</Menu.Item>
              </SubMenu>
            </Menu>

          </Col>
          <Col span={24} style={{minHeight:"400px"}}>
            <Row>
              <Col>
                ..........
              </Col>
            </Row>
            <Row>
              <Col>脚注.....</Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
