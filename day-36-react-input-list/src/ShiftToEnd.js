import React from 'react';
import './App.css';

class ShiftEnd extends React.Component {
  constructor() {
    super();
    this.state = {
      things: []
    }
  }
  doSubmit(evt) {
    if (evt.keyCode === 13) {
      let copy = this.state.things.slice();
      copy.push(evt.target.value);
      evt.target.value = ''
      this.setState({
        things: copy
      });
    }
  }

  doShiftEnd(index) {
    let copy = this.state.things.slice();
    let copy2 = copy.splice(index, 1);
    copy.push(copy2);
    this.setState({
      things: copy
    });
  }

  render() {
    let things = this.state.things.map((x, i) => {return <li onClick={() => this.doShiftEnd(i)} key={i}>{x}</li>});
    return (
      <div>
        <input onKeyUp={(evt) => {this.doSubmit(evt)}} />
        <ol>{things}</ol>
      </div>
    )
  }
}

module.exports = ShiftEnd;
