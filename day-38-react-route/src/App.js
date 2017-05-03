import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.js';
import Blah1 from './blah1.js';
import Blah2 from './blah2.js';
import Blah3 from './blah3.js';
import Blah4 from './blah4.js';

//https://www.youtube.com/watch?v=rBI39D87OJQ
//a few errors but good for noobs

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="container">
          <header>
             <h1>Gallery of Blah</h1>
          </header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/blah1'>Blah1</Link></li>
              <li><Link to='/blah2'>Blah2</Link></li>
              <li><Link to='/blah3'>Blah3</Link></li>
              <li><Link to='/blah4'>Blah4</Link></li>
            </ul>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/blah1' component={Blah1} />
          <Route path='/blah2' component={Blah2} />
          <Route path='/blah3' component={Blah3} />
          <Route path='/blah4' component={Blah4} />
          <footer>Brought to you by Carl's Jr. & React Router v4.</footer>
        </div>
      </Router>
    )
  }
};

module.exports = App;
