import React, { Component } from "react";
import { Layout } from "antd";
import CYheader from "./compoent/CYheader";
import CYsider from "./compoent/CYsider";
import CYcontent from "./compoent/CYcontent";
import CYfooter from "./compoent/CYfooter";
import "./index.css";

class index extends Component {
  componentDidMount() {
    this.props.GetMenuList();
  }
  render() {
    const { collapsed, toggle, data } = this.props;
    return (
      <Layout>
        <CYheader collapsed={collapsed} toggle={toggle} />
        <Layout>
          <CYsider collapsed={collapsed} data={data} />
          <CYcontent data={data} />
        </Layout>
        <CYfooter />
      </Layout>
    );
  }
}

export default index;
