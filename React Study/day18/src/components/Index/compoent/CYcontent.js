/*
 * @Author: your name
 * @Date: 2020-05-27 08:46:34
 * @LastEditTime: 2020-05-27 08:51:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\components\Index\compoent\CYcontent.js
 */

import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Sys_menu from "src/containers/Sys_menu";
const { Content } = Layout;

export default function CYcontent(props) {
  const { data } = props;
  return (
    <Content className="index-content">
      <Switch>
        <Route key="Sys_menu" path="/Sys_menu">
          <Sys_menu></Sys_menu>
        </Route>
        {data.map((el) => (
          <Route key={el.href} path={"/" + el.href}>
            <iframe className="todolink-iframe" src={el.link}></iframe>
          </Route>
        ))}
      </Switch>
    </Content>
  );
}
