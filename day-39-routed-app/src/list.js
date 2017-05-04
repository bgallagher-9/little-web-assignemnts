import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    // console.log('list', this.props);
    let people = this.props.people.map((x, i) => {
      return <li key={i + x.name}>
      <Link to={'/details/' + x.id}>{x.name}</Link></li>
    })
    return (
        <div>
          <ol>
            {people}
          </ol>
        </div>
    );
  }
}

export default List;
