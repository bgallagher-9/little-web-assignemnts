import React from 'react';
// import App from './App.js';
// import Query from './query.js';
// import List from './list.js';
import './App.css';

class Filter extends React.Component {
  filterAdd(evt) {
    if (evt.keyCode === 13) {
      this.props.filterTextAdd(evt.target.value);
      evt.target.value = ''
    }
  }

  render() {
    // console.log('filter', this.props.filter);
      let foodFilter = this.props.filter.map((x, i) =>
       <li onClick={() => this.props.filterTextRemove(i)} key={i}>{x}</li>);
    return (
      <div className="filterIng">
        <h1>Ingredient to filter by: </h1>
        <input
          placeholder="Ingredient Filter" onKeyUp={(evt) => {this.filterAdd(evt)}}/>
        <ol>
            {foodFilter}
        </ol>
      </div>
    );
  }
}

module.exports = Filter;
