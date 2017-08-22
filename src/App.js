import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import FakeHeader from './components/FakeHeader';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Route path="/" component={ Header } />
            <Route exact path="/fake" component={ FakeHeader } />
            <button><Link to="/fake">SecretOfTheFakes</Link></button>
            <div className="container">
              <Main></Main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
