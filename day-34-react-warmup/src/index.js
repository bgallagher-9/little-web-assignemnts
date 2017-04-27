import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './timer.js';
import Counter from './counter.js';
import Clocker from './clock.js';
import Superclock from './superclock.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Counter />
        <Timer />
        <Clocker />
        <Superclock />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
