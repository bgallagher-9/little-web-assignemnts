import React from 'react';
//import './App.css';
import App2 from './ArrestExt.js';
import $ from 'jquery';
import NFLArrest from './'

class Athlete extends React.Component {

  render() {
    return(
      <li className="arrestee" onClick={() => {this.arrestExt(); }}>
        <div>Name: {this.props.Name}</div>
        <div>Team Name: {this.props.TeamName}</div>
        <div>Team City: {this.props.TeamCity}</div>
        <div>Postition: {this.props.Position}</div>
        <div>Arrest Count: {this.props.ArrestCount}</div>
      </li>
    )
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  };
  componentDidMount() {
    $.ajax({
      url: 'http://nflarrest.com/api/v1/player'
    })
    .done((data) => {
      // console.log(data);
      this.setState({
        people: data
      });
    })
  };

  render() {
    let people = this.state.people.map((x, index) => <Athlete key={index} Name={x.Name} TeamName={x.Team_name} TeamCity={x.Team_city} Position={x.Position} ArrestCount={x.arrest_count} />);
    return (
      <div>
        <ol>
          {people}
        </ol>
      </div>
    );
  }
};
NFLArrest.arrestExt(this.props.name);

module.exports = App;
