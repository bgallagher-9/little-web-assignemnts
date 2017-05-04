import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import List from './list.js'
import About from './about.js'
import Details from './details.js'
import './App.css';





class App extends Component {
  constructor() {
    super();
    this.state = {
        people:[
          {
            id: 1,
            name: 'Brian Gallagher',
            desc: 'I am Groot'
          },
          {
            id: 2,
            name: 'Megan Gallagher',
            desc: 'wife of Groot'
          }
        ]
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">List</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/details">Details</Link></li>
            </ul>
          </nav>
          <Route exact path="/"
            render={() => <List people={this.state.people} /> }/>
          <Route path="/about" component={About}/>

          <Route path="/details/:id" render={(props) => {
              return <Details people={this.state.people} id={props.match.params.id} /> } }/>

        </div>
      </Router>
    );
  }
}

export default App;
