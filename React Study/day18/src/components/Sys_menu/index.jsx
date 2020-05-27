import React, { Component, Fragment, useEffect } from "react";
import { Table, Button } from "antd";
import Add_Menu from "./add_menu";
export default function index(props) {
  const { add, data, handleOnClick, handleAddMenu } = props;

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
      <div className="Sys_menu_top_Header">
        <Button onClick={() => handleOnClick(add)}>Add Menu</Button>
      </div>
      {add ? <Add_Menu handleAddMenu={handleAddMenu} /> : ""}
      <Table
        dataSource={dataSource}
        pagination={{
          /** 一页几条数据 */
          pageSize: 10,
        }}
        scroll={{ y: "55vh" }}
        columns={columns}
      />
    </Fragment>
  );
}
