import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Counter from './counter.js';
import Affirmation from './affirmation.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Link to="/counter">Counter</Link>
          <Link to="/affirmation">Affirmation</Link>
          <Route path="/counter" component={Counter}/>
          <Route path="/affirmation" component={Affirmation}/>
        </div>
      </Router>

    );
  }
}

export default App;
