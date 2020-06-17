import React, { Component,Fragment } from 'react'
import Header from "../../common/header";
import Home from "../../components/home"
export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Home></Home>
      </Fragment>
    )
  }
}
