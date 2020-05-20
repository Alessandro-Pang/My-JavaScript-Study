import React, { Component, Fragment } from "react";
import { Table, Button } from "antd";
import Add_Menu from './add_menu';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      add:false
    };
    this.handleAddMenu = this.handleAddMenu.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleAddMenu(value){
    console.log(value)
    if(!value.navName && !value.href && !value.link){
      return console.log("表单不允许为空")
    }
    fetch("http://127.0.0.1:3300/db/add_menu",{
      method:"post",
      mode:"cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value)
    })
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

  handleOnClick(){
    this.setState(prevState=>({
      add : !this.state.add
    }))
  }
  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "navName",
        dataIndex: "navName",
        key: "navName",
      },
      {
        title: "Href",
        dataIndex: "href",
        key: "href",
      },
      {
        title: "Link",
        dataIndex: "link",
        key: "link",
      },{
        title:"Icon",
        dataIndex:"icon",
        key:"icon"
      }
    ];

    let data = this.state.data.map((el) => ({
      key: el.id,
      id: el.id,
      navName: el.navName,
      href: el.href,
      link: el.link,
      icon:el.icon
    }));
    return (
      <Fragment>
        <Button onClick={this.handleOnClick}>Add Menu</Button>
        {
          this.state.add 
          ? 
          <Add_Menu handleAddMenu={this.handleAddMenu}/>
          :
          ''
        }
         <Table dataSource={data} scroll={{ y:'55vh'}} columns={columns} />
      </Fragment>
    );
  }
}
