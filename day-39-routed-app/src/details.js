import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// console.log('props?', this.props);
class Details extends Component {
  // <ol>
  //   {desc}
  // </ol>
  render() {
    console.log('list', this.props);

    let person;
    for (let i = 0; i < this.props.people.length; i++) {
      if (this.props.people[i].id == this.props.id) {
        person = this.props.people[i];
        break;
      }
    }

    return (
        <div>
          <h2>Details</h2>
          <div>Id: {person.id}</div>
          <div>Name: {person.name}</div>
          <div>Desc: {person.desc}</div>
        </div>
    );
  }
}

export default Details;
