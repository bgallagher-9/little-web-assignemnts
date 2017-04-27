import React from 'react';
import './timer.css';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {time: 0}
  };
  componentDidMount() {
    setInterval(() => this.setState({time: this.state.time + 1}),
    1000);
  };
  render() {
    return (
      <div className="timer">
        {this.state.time}
      </div>
    )
  };
};


module.exports = Timer;
