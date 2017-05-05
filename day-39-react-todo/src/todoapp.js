import React, { Component } from 'react';
import $ from 'jquery';


const bucketId = "4ad1ca83-07c1-499b-9c86-e69676d374ee"


class TodoApp extends Component {

  constructor() {
    super();
    this.state = {
      todovalue: ''
    };
  }

  handleChange(evt) {
    this.setState({
      todovalue: evt.target.value
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      let things = this.state.todovalue.slice();
      things.push(evt.target.value);
      evt.target.todovalue = '';
      this.createNewItem(this.state.todovalue);
      this.setState({
        todovalue: things
      });
    }
  }

  handleRemove(i) {
    let items = this.state.todovalue.slice();
    items.splice(i, 1);
    this.removeNewItem(this.state.todovalue);
  }

  removeNewItem(todoText) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item?bucketId=${bucketId}`,
      method: 'DELETE',
      data: {
        text: todoText
      }
    })
    .done((data) => {
      data: data.people
    })
  }

  createNewItem(todoText) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: todoText
      }
    })
    .done((data) => {
      data: data.people
    })
  }

  render() {
    // let todoItems = this.state.value.map((x, i) => { return <li onClick={() => this.handleRemove(i)} key={i}>{x}</li> })
    return(
      <div>
        <input onKeyUp={(evt) => this.handleKeyUp(evt)}
        onChange={(evt) => this.handleChange(evt)}
        />
      <ol>

      </ol>

      </div>
    );
  }
}

export default TodoApp;
