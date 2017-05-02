import React from 'react';
import $ from 'jquery';
import App from './App.js';
import NFLArrest from './nameSpace.js';

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      arrestDetails: []
    };
    console.log(this.state);
  }
  componentDidMount() {
    $.ajax({
      url: 'http://nflarrest.com/api/v1/player/arrests/' //+ props.arrested
    })
    .done((data) => {
      // console.log(data);
      this.setState({
        arrestDetails: data
      });
    })
  }
  render() {
    let arrestDetails = this.state.arrestDetails.map((y) => <Details key={y.arrest_stats_id} Date={y.Date} Category={y.Category} Description={y.Description} Outcome={y.Outcome} />);
    return(
      <div>
        <ol>{arrestDetails}</ol>
      </div>
    );
  }
};

class Details extends React.Component {
  arrestExt() {
    let arrested = this.props.name;
    // console.log(this.props.Name)
  };

  render() {
    return(
      <li className="arrestDeets">
        <div>Date of Arrest: {this.props.Date}</div>
        <div>Category: {this.props.Category}</div>
        <div>Description: {this.props.Description}</div>
        <div>Outcome: {this.props.Outcome}</div>
      </li>
    )
  }
};
NFLArrest.arrestExt = arrestExt();
module.exports = App2;
