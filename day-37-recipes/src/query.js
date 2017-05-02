import React from 'react';
// import App from './App.js';
// import Filter from './filter.js';
// import List from './list.js';
import './App.css';


class Query extends React.Component {
  // queryThis(evt) {
  //   if (evt.keyCode === 13) {
  //     let food = this.props.recipeName.slice();
  //
  //   }
  // }


  render() {
    return(
      <div>
        <input placeholder="Let's Query!"/>
      </div>
    );
  }
}

module.exports = Query;
