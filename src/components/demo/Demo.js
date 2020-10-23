import React, { Component } from "react";
import Increment from "./Increment";
import "./demo.css";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.setCount = this.setCount.bind(this);
  }

  setCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>BRING HACK 4 CAUSE</h1>
        <p>Here's a description</p>
        <h1>
          Counter <span className="red-text">{this.state.count}</span>
        </h1>
        <Increment setCount={this.setCount} />
      </div>
    );
  }
}

export default Demo;
