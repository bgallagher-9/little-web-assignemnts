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
      recipes: [],
      filter: [],
      query: ''
    };
  }

  makeAjaxCall() {
    $.ajax({
      url: `/api/?i=${this.state.filter}&q=${this.state.query}`
      // +
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
          href: x.href,
          url: x.thumbnail,
          ingredients: x.ingredients
        }
      });
      this.setState({
        recipes: fixedData
      });
    }
  )}

  handleQuery(input) {
    this.setState({
      query: input
    }, () => this.makeAjaxCall());
  }

  handleFilterRemove(i) {
    // console.log(i);
    let list = this.state.filter.slice();
    list.splice(i, 1);
    this.setState({
      filter: list
    }, () => this.makeAjaxCall());
  }
  handleFilterAdd(input) {
    let list = this.state.filter.slice();
    list.push(input);
    this.setState({
      filter: list
    }, () => this.makeAjaxCall());
  }
  render() {
    return (
      <div>
        <header>
          <h2>My Recipe App</h2>
        </header>
        <div className="container">
          <div className="query">
            <h2>Time to find a recipe.</h2>
            <Query
              recipes={this.state.recipes}
              querySubmit={(input) => this.handleQuery(input)}
              query={this.state.query}
               />
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
        <footer>
          <h2>
            This app was created using <a href="http://recipepuppy.com">www.recipepuppy.com</a>. No actually puppies were used in these recipes...to the best of my knowledge.
          </h2>
        </footer>
      </div>

    );
  }
}

module.exports = App;
