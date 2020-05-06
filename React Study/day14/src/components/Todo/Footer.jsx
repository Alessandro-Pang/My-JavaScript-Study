import React, { Component } from "react";
import FilterLink from "@src/containers/FilterLink";

export default class Footer extends Component {
  render() {
    return (
      <p>
        Show:&nbsp;
        <FilterLink filter="SHOW_ALL">All</FilterLink>,
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>,
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </p>
    );
  }
}
