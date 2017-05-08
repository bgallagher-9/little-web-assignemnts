import React, { Component } from 'react';
import $ from 'jquery';


const bucketId = "4ad1ca83-07c1-499b-9c86-e69676d374ee"
class TodoApp extends Component {

  constructor() {
    super();
    this.state = {
      todovalue: '',
      items: []
    };
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
      this.getNewItem();
    })
  }

  getNewItem() {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/items?bucketId=${bucketId}`,
      // method: 'GET',
      // data: {
      //   text: todoText
      })

    .done((data) => {
      console.log(data);
      this.setState({
        items: data.items
      });
    });
  }

  componentDidMount() {
    this.getNewItem();
  }

  removeNewItem(id) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE',
    })
    .done((data) => {
      this.getNewItem();
    })
  }

  // handleChange(evt) {
  //   this.setState({
  //     todovalue: evt.target.value
  //   });
  // }

  handleKeyUp(keyCode) {
    if (keyCode === 13) {
      this.createNewItem(this.state.todovalue);
      // this.getNewItem(this.state.todovalue);
      this.setState({
        todovalue: ''

      });
      // handleKeyUp(keyCode) {
      //     if (keyCode === 13) {
      //       this.createItem(this.state.inputValue);
      //       this.setState({
      //         inputValue: ''
      //       });
      //     }
      //   }
    }
  }
  toggleItem(id) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST',
    })
    .done((data) => {
      this.getNewItem();
    })
  }

  render() {
console.log(this.state)
    let todoItems = this.state.items.map((x) => {
      const className = x.isComplete ? 'complete' : '';
      return <li className={className} key={x.id} onClick={() => this.toggleItem(x.id)}>{x.text}<button onClick={(evt) => this.removeNewItem(x.id, evt)}>Delete</button></li> })

    return(
      <div>
        <input
          value={this.state.todovalue}
          onKeyUp={(evt) => this.handleKeyUp(evt.keyCode)}
          onChange={(evt) => this.setState({ todovalue: evt.target.value})}

        />
      <ol>
        {todoItems}
      </ol>
      </div>
    );
  }
}

export default TodoApp;
