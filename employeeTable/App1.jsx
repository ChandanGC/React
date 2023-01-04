import React, { Component } from "react";
import JSON from "./employee.json";
import Employee from "./Employee.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = { empDetails: JSON };
  }
  render() {
    return (
      <div>
        <Employee empDetails={this.state.empDetails} />
      </div>
    );
  }
}

export default App;
