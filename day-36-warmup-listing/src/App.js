import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      things: ['tacos', 'games', 'computer', 'elevator']
    }
  }
  render() {
    let stuff = this.state.things.map((x, index) => <Stuff key={index} things={x} />);

    return (
      <div className="App">
        <ol>
          {stuff}
        </ol>
      </div>
    );
  }
}
class Stuff extends React.Component {
  render() {
    return(
      <li>
        {this.props.things}
      </li>
    )
  }
}


module.exports = App;
