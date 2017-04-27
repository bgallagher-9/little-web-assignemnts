import React from 'react';
import './superclock.css';

//BG way ---- toooo long
// class Superclock extends React.Component {
//   constructor() {
//     super();
//     this.state = {sclock: new Date()};
//   }
//   setTime() {
//     var sclock = new Date();
//     var hours = (sclock.getUTCHours()-4); //+ parseInt(this.state.UTCOffset - 30000)
//     if (hours <= 24 || hours >= 12) {
//       hours -= 12;
//     }
//     hours = hours + "";
//     if (hours.length === 1 ) {
//       hours = "0" + hours;
//     }
//     var minutes = sclock.getUTCMinutes();
//     minutes = minutes + "";
//     if (minutes.length === 1) {
//       minutes = "0" + minutes;
//     }
//     var seconds = sclock.getUTCSeconds();
//     if (seconds.length === 1) {
//       seconds = "0" + seconds;
//       console.log(seconds.length);
//     }
//     console.log(hours, minutes, seconds);
//     console.log(seconds.length);
//     this.setState ({
//       hours: hours,
//       minutes: minutes,
//       seconds: seconds,
//     });
//   }
//   componentDidMount() {
//      window.setInterval(function () {
//       this.setTime();
//     }.bind(this), 1000);
//   }
//   render() {
//     return (
//       <div className="superclock">
//         <span>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
//       </div>
//     )
//   }
// }
//module.exports = Superclock;

class Superclock extends React.Component {
  constructor () {
    super();
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000)
  }
  render() {
    return (
      <div>
          <Clock date={this.state.date} offset={-2} timezone="Pacific"/>
          <Clock date={this.state.date} offset={+1} timezone="Eastern"/>
          <Clock date={this.state.date} offset={+0} timezone="Local"/>
      </div>
    )
  }
}
class Clock extends React.Component {

  render () {
    var hour = this.props.date.getHours() + this.props.offset;
    if (hour > 12) {
      hour -= 12;
    };
    var minute = this.props.date.getMinutes();
    if (minute < 10) {
      minute = '0' + minute;
    };
    var second = this.props.date.getSeconds();
    if (second < 10) {
      second = '0' + second;
    };
    return(
      <div>
        {this.props.timezone + ": "}{hour}:{minute}:{second}
      </div>
    );
    //long notation for div
    //{this.props.date.getHours() + this.props.offset}:{this.props.date.getMinutes()}:{this.props.date.getSeconds()}
  }
}

module.exports = Superclock;
