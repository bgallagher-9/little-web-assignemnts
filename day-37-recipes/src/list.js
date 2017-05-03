import React from 'react';
// import App from './App.js';
// import Query from './query.js';
// import Filter from './filter.js';
import './App.css';


class RecipeList extends React.Component {

  render() {
    return (
      <li className="listItem">
        <img src={this.props.url} alt={this.props.name}/>
        <div>
          <h2><a href={this.props.href}>{this.props.name}</a></h2>
          <p>Ingredients: {this.props.ingredients}</p>

        </div>
      </li>
    );
  }
}
class List extends React.Component {

  render() {

    let foodItems = this.props.recipes.map((x, i) => {
      return <RecipeList
              url={x.url}
              name={x.name}
              href={x.href}
              ingredients={x.ingredients}
              key={i + x.name} />
      });
      // console.log(foodItems);
    return (
      <div>
        <ol>
          {foodItems}
        </ol>
      </div>
    );
  }
}

module.exports = List;
