import React, { Component } from "react";

 class App1 extends Component {
  constructor() {
    super();
    this.state = { user: "GC" };
  }
  // componentDidMount() {
  //   let btn = document.querySelector("button");
  //   btn.addEventListener("click", () => {
  //     this.setState({ user: "Nidhi" });
  //   });
  // }
  componentDidMount() {
    let input = document.querySelector("input");
    input.addEventListener("keypress", e => {
      this.setState({ user: e.target.value });
    })}
  
  render() {
    return (
      <>
        <div>{this.state.user}</div>
        {/* <button>CLICK TO CHANGE</button> */}
        <input type="text" />
      </>
    );
  }
} 

export default App1
