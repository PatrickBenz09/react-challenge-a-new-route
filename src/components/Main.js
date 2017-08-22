import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Slideshow from './Slideshow'
import List from './List'
import Detail from './Detail'

class Main extends Component {
  render() {
    return(
      <div>
        <Router>
          <div>
            <Route exact path="/" component={ List }></Route>
            <Route exact path="/detail/:id" component={ Detail }></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main
