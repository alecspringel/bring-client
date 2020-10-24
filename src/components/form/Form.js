import React, { Component } from "react";
import styled from "styled-components";
import Description from "./Description";
import Inputs from "./Inputs";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Description />
        <Inputs />
        <hr></hr>
      </div>
    );
  }
}

export default Form;