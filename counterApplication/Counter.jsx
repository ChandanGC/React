import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  constructor() {
    super();
    this.state = { Counter: 0 };
  }
  render() {
    let handleIncrement = () => {
      this.setState({ Counter: this.state.Counter + 1 });
    };
    let handleDecrement = () => {
      this.setState({ Counter: this.state.Counter - 1 });
    };
    let handleReset = () => {
      this.setState({ Counter: 0 });
    };
    return (
      <div className="counterBlock">
        <h1>{this.state.Counter}</h1>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    );
  }
}

export default Counter;
