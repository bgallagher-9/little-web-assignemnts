import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super();
    let theDate = props.date !== undefined ? props.date : new Date();
    // if(props.date !== undefined) {
    //   theDate = props.date;
    // }
    // else {
    //   theDate = new Date();
    // }
    this.state = {
      date: theDate
    };
  }
  componentDidMount() {
    if (this.props.date === undefined) {
      setInterval(() => {
        this.setState({
          date: new Date()
        });
      }, 1000);
    }
  }
  render() {
    let date = this.props.date ? this.props.date : this.state.date;
    return(
      <div>{date.toLocaleTimeString()}</div>
    );
  }
}
module.exports = Clock;
