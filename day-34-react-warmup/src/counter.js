import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  clickity() {
    this.setState({
      count: this.state.count + 1
    })
  }
  clickityD() {
    if (this.state.count === 0) {
      return;
    }
      this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className="counter">
        <button onClick={() => this.clickityD()} >Down</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.clickity()} >Up</button>
      </div>
    )
  }
}

module.exports = Counter;
