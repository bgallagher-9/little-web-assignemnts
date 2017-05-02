import React from 'react';
import Query from './query.js';
import Filter from './filter.js';
import List from './list.js';
import $ from 'jquery';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [
        {
          url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTm6IyBRyPt_NTcp9vP-vAz6TutQz_DaFZzOC6EwOU5h_mKdOXrA',
          name: 'Cheeseburger',
          ingredients: 'Hamburger meat, Cheese, Burger buns, Pickles, Mustard, Ketchup'
        },
        {
          url: 'http://reyesnypizza.com/images/background.jpg',
          name: 'Pizza',
          ingredients: 'Dough, Marinara sauce, Pepperoni, Anchovies, Mozzarella cheese'
        }
    ],
    filter: ['item1', 'item2']
  };
  }

  handleFilterRemove(i) {
    // console.log(this.state.filter.splice(i, 1));
    let list = this.state.filter.slice();
    list.splice(i, 1);
    this.setState({
      filter: list
      
    });
  }

  handleFilterAdd(input) {
    let list = this.state.filter.slice();
    list.push(input);
    this.setState({
      filter: list
    });
  }

  makeAjaxCall() {
    $.ajax({
      url: '/api/?q=anchovies'
    })
    .done((data) => {
      data = JSON.parse(data);
      let fixedData= data.results.map((x) => {
        if (x.thumbnail === '') {
          return {
            name: x.title,
            href: x.href,
            url: "no-image.png",
            ingredients: x.ingredients
          }
        }
        return {
          name: x.title,
          url: x.thumbnail,
          ingredients: x.ingredients
        }
      });
      this.setState({
        recipes: fixedData
      });
    }
  )}

  componentDidMount() {
    this.makeAjaxCall();
  };

  render() {
    // console.log(this.state.filter);
    return (
      <div>
        <header>
          <h2>My Recipe App</h2>
        </header>
        <div className="container">
          <div className="query">
            <Query  />
          </div>
          <div className="list">
            <List recipes={this.state.recipes} />
          </div>
          <div className="filter">
            <Filter
              filterTextAdd={(input) =>             this.handleFilterAdd(input)}

              filter={this.state.filter}

              filterTextRemove={(i) =>
              this.handleFilterRemove(i)}
              />
          </div>
        </div>
        <footer></footer>
      </div>

    );
  }
}

module.exports = App;
