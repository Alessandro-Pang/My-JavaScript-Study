import React, { Component } from 'react';
// import LoginBox from "@/LoginBox"
import Login from "src/containers/Login"
import './index.css'
class index extends Component {
  render() {
    return (
      <main id="login-main">
        <Login></Login>
      </main>
    );
  }
}

export default index;
