import React, { Component } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Children from "@/Home/Children";

function Test() {
  let { id } = useParams();
  return (
    <div>
      <Children test={id}></Children>
    </div>
  );
}
export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ol>
            <li>
              <Link to="/Home/AA">AA</Link>
            </li>
            <li>
              <Link to="/Home/BB">BB</Link>
            </li>
            <li>
              <Link to="/Home/CC">CC</Link>
            </li>
          </ol>
        </nav>
        <Switch>
          <Route path="/Home/:id" children={<Test />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
