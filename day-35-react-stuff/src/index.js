import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithubRepo from './githubrepo.js';
import Clock from './clock.js';
import SuperClock from './superclock.js';

class Toggle extends React.Component {
//   constructor() {
//     super();
//     //this.state = {isToggled: false};
//     //this.onToggle = this.onToggle.bind(this);
//     this.state = {
//       value: 'YES!'
//     }
//   }
//
//
//   toggle() {
//     this.setState({
//       value: this.state.value === 'YES!' ? 'NO!' : 'YES!'
//     });
//   }
  // onToggle() {
  //   this.setState(prevState => ({
  //     isToggled: !prevState.isToggled
  //   }));
  // }
    // ? 'YES!' : 'NO!'}

    //For Toggle warmup---put back in render/return
    // <div className="toggle" onClick={() => this.toggle()}>
    //   {this.state.value}
    //
    // </div>
  render() {
    return (
      <div>
        <Clock />
        <SuperClock />
      </div>
    );
  }
}
ReactDOM.render(
  //can return only one component here!!!!
  // <Toggle />,
  <GithubRepo />,
  // <SuperClock />,
  document.getElementById('root'),
);
