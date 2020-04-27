import React from "react";
import HookStudy from "./HookStudy";

//注：JS代码块模板中，继承的是Component，不是React.Component
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.styles={
      color:"green",
      fontSize:'17px',
    }
    this.state={
      message:''
    }
  }
  componentDidMount(){
    /*
    FIXME:
      如果用户直接进入该页面，则无法直接反馈该数据
      需要等待切换一个路由后，再次返回才会显示！
      this.props.localtion.query
    */
    this.setState({
      message:this.props.location.query
    })
  }
  //当组件离开（移除）时触发
  componentWillUnmount(){
    console.info("User离开了本页面！")
  }
  render() {
    //组件不能没有返回值
    return (
      <div>
        <h2 style={this.styles}> {this.state.message} </h2>
      </div>
    );
  }
}
