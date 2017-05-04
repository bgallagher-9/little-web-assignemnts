import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import TodoApp from './todoapp.js';


const Home = () => <div>Home, yo!</div>
// const TodoApp = () => <div>Todo, yo!</div>
const Gallery = () => <div>Gallery, yo!</div>


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/app" component={TodoApp}/>
          <Route path="/gallery" component={Gallery}/>
        </div>
      </Router>

    );
  }
}

export default App;
