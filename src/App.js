import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'normalize.css';
import './hover-min.css';
import Home from './Home.js';
import Gallery from './Gallery.js';
import Videos from './Videos.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/gallery' component={Gallery} />
          <Route exact path = '/videos' component={Videos} />
         </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
