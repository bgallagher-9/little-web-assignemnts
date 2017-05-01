import React, { Component } from 'react';
//import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
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

class Athlete extends React.Component {

  arrestExt() {
    let arrested = this.props.name;
    console.log(this.props.Name)
  }

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

module.exports = App;
