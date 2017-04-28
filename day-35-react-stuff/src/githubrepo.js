import React from 'react';
import $ from 'jquery';
import './githubrepo.css';


class Person extends React.Component {
  render() {
    return(
      <li>
        <div>Name: {this.props.name}</div>
        <div>Birth Year: {this.props.birth_year}</div>
      </li>
    )
  }
}

class GithubRepo extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    $.ajax({
      url: 'http://swapi.co/api/people'
    })
    .done((data) => {
      // console.log('gimme data', data);
      this.setState({
        people: data.results
      });
    })
  }
  // <li key={x.url}>
  //   <a href="{x.url}">
  //     <div>Name: {x.name}</div>
  //     <div>Birth Year: {x.birth_year}</div>
  //   </a>
  //   </li>

  render() {
    // console.log(this.state)

    let people = this.state.people.map((x) => <Person key={x.url} name={x.name} Birth Year={x.birth_year} />);

    return (
      <div>
        <ol>
          {people}
        </ol>
      </div>
    );
  }
};

module.exports = GithubRepo;
