import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>There's no place like 127.0.0.1.</p>
  </div>
)

const Test1 = () => (
  <div>
    <h2>Test1</h2>
    <p>This is a test, yo.</p>
  </div>
)

const Test2 = () => (
  <div>
    <h2>Test2</h2>
    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  </div>
)

const Test3 = () => (
  <div>
    <h2>Test3</h2>
    <p>10 9 8 7 6 5 4 3 2 1 </p>
  </div>
)

const Example = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test1">Test1</Link></li>
        <li><Link to="test2">Test2</Link></li>
        <li><Link to="test3">Test3</Link></li>
      </ul>

      <hr/>

      <Route exact={true} path="/" component={Home} />
      <Route path="/test1" component={Test1} />
      <Route path="/test2" component={Test2} />
      <Route path="/test3" component={Test3} />
    </div>
  </Router>
)

module.exports = Example;
