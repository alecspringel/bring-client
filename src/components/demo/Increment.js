import React, { Component } from "react";

class Increment extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.setCount}>+ 1</button>
      </div>
    );
  }
}

export default Increment;
