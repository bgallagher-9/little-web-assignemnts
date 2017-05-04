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
      this.createNewItem(this.state.todovalue);
    }
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

    })
  }

  render() {
    return(
      <div>
        <input onKeyUp={(evt) => this.handleKeyUp(evt)}
        onChange={(evt) => this.handleChange(evt)}
        />

      </div>
    );
  }
}

export default TodoApp;
