import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import TodoApp from './todoapp.js';
import Gallery from './gallery.js';


const Home = () => (
  <div>Home, yo</div>
)
// const TodoApp = () => <div>Todo, yo!</div>
// const Gallery = () => <div>Gallery, yo!</div>


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/app">TodoApp</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>

          <Route exact={true} path="/" component={Home} />
          <Route path="/app" component={TodoApp} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>

    );
  }
}

export default App;
