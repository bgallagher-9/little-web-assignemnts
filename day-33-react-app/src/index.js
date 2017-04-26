import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Clicker extends React.Component {
  constructor() {
    //used to set the default state of 'count'
    super();
    this.state = {
      count: 0
    };
  }
  clickity() {
    /*can be condensed
    var count = this.state.count;
    count += 1;
    */
    this.setState({
      //condensed version
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div onClick={() => { this.clickity(); }}>{this.state.count}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Clicker />
        <Clicker />
        <Clicker />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
