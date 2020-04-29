import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import Home from './Home/Home';
import Bransh1 from './branch1/Bransh1';
import Node from './node/Node';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  /**
   * 空,Null,undefined,0 均为false值
   * let a=5;
   * let b = 0;
   * while(a){
   *     b=a+b;
   *     a--;
   * }
   * console.info(b)
   * --> 15;
   */
  render() {
    /**
      exact是Route下的一个属性，react路由会匹配到所有能匹配到的路由组件，exact能够使得路由的匹配更严格一些。
      exact的值为bool型，为true时表示严格匹配，为false时为正常匹配。

      例子如下：

      <Route path='/' component={Home} />
      <Route path='/page' component={Page}>
         这种情况下，如果匹配路由path='/page'，那么会把Home也会展示出来。
         既路由path='/page'会匹配路由path='/'和路由path='/page'
     */
    return (
      <div>
        <h2 className="logo">WleCome To ZiYang Blog</h2>
        <Router history={History}>
          <nav className="router-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Bransh1">Bransh Test</Link></li>
              <li><Link to="/Node">Node Study</Link></li>
            </ul>
          </nav>
          {/* 如果不加exact 那么这个路由始终显示，其他路由页面会在后面显示 */}
          <Route path="/"  exact component={Home}></Route>
          <Route path="/Bransh1" component={Bransh1}></Route>
          <Route path="/Node" component={Node}></Route>
        </Router> 
      </div>
    );
  }
}

export default App;
