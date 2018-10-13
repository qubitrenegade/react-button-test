import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  
  handleIncrement = () => {
    this.setState({counter: this.state.counter + 1})
  }

  handleDecrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      <div>
        <button id='increment' onClick={this.handleIncrement}>++</button>
        <div id='counter'>Count:{' '}
          <div id='counter-count'>{this.state.counter}</div>
        </div>
        <button id='decrement' onClick={this.handleDecrement}>--</button>
      </div>
    )
  }
}
