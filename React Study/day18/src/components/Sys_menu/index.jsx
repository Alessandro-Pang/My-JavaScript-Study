import React, { Component, Fragment, useEffect } from "react";
import { Table, Button } from "antd";
import Add_Menu from "./add_menu";
export default function index(props) {
  const { add, data, loadMenu, handleOnClick, handleAddMenu } = props;

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    loadMenu(data);
  });

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
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
    },
  ];

  let dataSource = data.map((el) => {
    const { id, navName, href, link, icon } = el;
    return {
      key: id,
      id,
      navName,
      href,
      link,
      icon,
    };
  });

  return (
    <Fragment>
      <Button onClick={() => handleOnClick(add)}>Add Menu</Button>
      {add ? <Add_Menu handleAddMenu={handleAddMenu} /> : ""}
      <Table dataSource={dataSource} scroll={{ y: "55vh" }} columns={columns} />
    </Fragment>
  );
}
