import React, { Component } from 'react';
import Index from 'src/containers/Index';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
//使用push、replace和go导航
history.push("/Sys_menu");
class index extends Component {
  render() {
    return (
      <Index/>
    );
  }
}

export default index;
