import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: []
    }
  }
  doSubmit(evt) {
    if (evt.keyCode === 13) {
      let copy = this.state.value.slice();
      copy.push(evt.target.value);
      evt.target.value = ''
      this.setState({
        value: copy
      });
    }
  }
  doRemove(index) {
    let copy = this.state.value.slice();
    copy.splice(index, 1);
    this.setState({
      value: copy
    });
  }

  // doShiftEnd(index) {
  //   let copy = this.state.value.slice();
  //   let copy2 = copy.splice(index, 1);
  //   copy.push(copy2);
  //   this.setState({
  //     value: copy
  //   });
  // }


  render() {
    let value = this.state.value.map((x, index) => {return <li onClick={() => this.doRemove(index)} key={index}>{x}</li>});
    return (
      <div>
        <input onKeyUp={(evt) => {this.doSubmit(evt)}} />
        <ol>
           {value}
        </ol>
      </div>
    );
  }
}

// class ShiftEnd extends React.Component {
//
//
//
//   render() {
//     return(
//       doShiftEnd(index)
//     )
//   }
// }

module.exports = ClickRemove;
