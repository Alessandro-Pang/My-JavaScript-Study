import React, { Component, Fragment } from "react";
import { BackTop, Row ,Col} from "antd";
import Header from "../../common/header";
import Footer from "../../common/footer"
import ArticleContainer from "../../components/article";
import Aside from "../../components/aside"
import "./index.less"
// import './index.less'
export default class index extends Component {
  style = {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#1088e9",
    color: "#fff",
    fontSize: 14,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  };
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Row className="zy-article-container">
          <ArticleContainer></ArticleContainer>
          <Col
            span={6}
            style={{margin:"0 15px",padding0:"0 0 10px 15px"}}
            className="zy-aside-container"
          >
            <Aside></Aside>
          </Col>
        </Row>

        <BackTop>
          <div style={this.style}>
            <i style={{color:"#eee"}} className="fa fa-fw fa-hand-o-up fa-2x"></i>
          </div>
        </BackTop>
        <Footer>
        </Footer>
      </Fragment>
    );
  }
}
