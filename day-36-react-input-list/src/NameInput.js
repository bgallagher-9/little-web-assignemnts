import React from 'react';
import './App.css';

class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      person: [],
      firstName: '',
      lastName: ''
    };
  }
  // fName(evt) {
  //   // console.log
  //   this.setState({
  //     firstName: evt.target.value
  //   });
  // }
  //
  // lName(evt) {
  //   this.setState({
  //     lastName: evt.target.value
  //   });
  // }
  add(evt) {
    console.log('click', this);
    let copyOfPeople = this.state.person.slice();
    copyOfPeople.push(this.state.firstName + ' ' + this.state.lastName);
    evt.target.value = '';
    this.setState({
      firstName: '',
      lastName: '',
      person: copyOfPeople
    });

  }
  clear(evt) {
    this.setState({
      firstName: '',
      lastName: ''
    });
  }
  changeInput(x) {
    this.setState({
      [x.target.name]: x.target.value
    });
  }
  render() {
    let names = this.state.person.map((x, i) => {return <li key={i + x}>{x}</li>});
    return (
      <div>
        <input className="firstName" name="firstName" onChange={(evt) => {this.changeInput(evt)}} value={this.state.firstName} />
        <input className="lastName" name="lastName"value={this.state.lastName}  onChange={(evt) => {this.changeInput(evt)}}/>
        <button onClick={(evt) => this.add(evt)}>Add</button>
        <button onClick={(evt) => this.clear(evt)}>Clear</button>
        <ol>{names}</ol>
      </div>
    )
  }
}
module.exports = Name;
