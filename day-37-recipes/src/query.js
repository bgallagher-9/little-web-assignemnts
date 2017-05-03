import React from 'react';
// import App from './App.js';
// import Filter from './filter.js';
// import List from './list.js';
import './App.css';


class Query extends React.Component {

  handleQuery(evt) {
    // console.log(evt.target.value);
    if (evt.keyCode === 13) {
      this.props.querySubmit(evt.target.value);
      evt.target.value = ''
    }
  }
  render() {
    // console.log('query', this.props.query)
    return(
      <div>
        <input placeholder="Let's Query!" onKeyUp={(evt) => {this.handleQuery(evt)}}
          />
      </div>
    );
  }
}

module.exports = Query;
