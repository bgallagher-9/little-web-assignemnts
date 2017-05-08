import React, { Component } from 'react';
// import { createStore } from 'redux';
import { store, IncrementAction, DecrementAction, ResetAction } from './store.js';
import './counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  increment() {
    store.dispatch(IncrementAction);
  }
  decrement() {
    store.dispatch(DecrementAction);
  }
  reset() {
    store.dispatch(ResetAction);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={() => this.decrement()}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => this.increment()}>+</button>
        <hr></hr>
        <button onClick={() => this.reset()}>Reset</button>
      </div>

    );
  }
}

export default Counter;
