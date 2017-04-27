import React from 'react';
import './clock.css';

class Clocker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clock: new Date()};
  }
  componentDidMount() {
    setInterval(() => this.setState({clock: new Date()}))}
  render() {
    return (
      <div className="clocker">
      {this.state.clock.toLocaleTimeString()}
      </div>
    )
  }
}



module.exports = Clocker;
