import React, { Component } from 'react';
import {BrowserRouter as Router ,Route ,Link , Switch} from "react-router-dom"

function A (){
  return(
    <div>AAAAAA</div>
  )
}
function B (){
  return(
    <div>BBBBB</div>
  )
}
function C (){
  return(
    <div>CCCCC</div>
  )
}

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <ol>
              <li>
                <Link to="/Me/A">A</Link>
              </li>  
              <li>
                <Link to="/Me/B">B</Link>
              </li> 
              <li>
                <Link to="/Me/C">C</Link>
              </li> 
            </ol>  
          </nav>   
          <hr/>
          <Switch >
            <Route path="/Me/A">
              <A></A>
            </Route>
            <Route path="/Me/B">
              <B></B>
            </Route>
            <Route path="/Me/C">
              <C></C>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
