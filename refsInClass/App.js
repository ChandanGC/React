import React, { Component } from 'react'

export default class App1 extends Component {

    constructor() {
        super()
        this.btnRef = React.createRef(null)
        
    }

    nithya = () => {
        this.btnRef.current.style.color = "Red"
        this.btnRef.current.style.padding = "10px";
        
    }
  render() {
    return (
        <div>
            <button ref={this.btnRef} onClick={this.nithya}>CHANGE</button>
            
      </div>
    )
  }
}
