import React, { Component, Fragment } from "react";
import { Card, Row, Col } from "antd";
import "./index.less";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <div className="pcy-home-container">
          <div className="article"></div>
          <Row>
            <Col span={12} offset={4} className="article">
              <Row gutter={16}>
                <Col span={8}  style={{marginTop:10}} >
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}  style={{marginTop:10}}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}  style={{marginTop:10}}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}  style={{marginTop:10}}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济……"
                    />
                  </Card>
                </Col>
                <Col span={8}  style={{marginTop:10}}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}  style={{marginTop:10}}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济……"
                    />
                  </Card>
                </Col>
                <Col span={8}  style={{marginTop:10}}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                <Col span={8}  style={{marginTop:10}}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <div key="setting">浏览量</div>,
                      <div key="tags">python</div>,
                      <div key="date">2020</div>,
                    ]}
                  >
                    <Card.Meta
                      title={<a href="#">Europe Street beat</a>}
                      description="小伙伴们，有一句话叫“盛世收藏乱世黄金”，大家知道黄金作为人人垂涎又高大上的期货产品，对于社会经济……"
                    />
                  </Card>
                </Col>
                
              </Row>
            </Col>
            <Col span={6} className="aside">
              1111111111111111111111
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
