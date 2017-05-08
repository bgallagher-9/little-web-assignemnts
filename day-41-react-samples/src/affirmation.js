import React, { Component } from 'react';
import { store2, NEXT, PREV } from './store.js';

class Affirmation extends Component {
  constructor() {
    super();
    this.state = store2.getState();
  }
  componentDidMount() {
    store2.subscribe(() => {
      this.setState(store2.getState());

    });
  }
  next() {
    store2.dispatch(NEXT);
    console.log('next', this.state);
  }
  prev() {
    store2.dispatch(PREV);
    console.log('prev', this.state);

  }

  render() {
    // console.log(this.state.index);
    return (
      <div className="index">
        <div>{this.state.affirmArr}</div>
        <hr></hr>
        <button onClick={() => this.prev()}>Prev</button>
        <button onClick={() => this.next()}>Next</button>
      </div>
    )
  }
}

export default Affirmation;
