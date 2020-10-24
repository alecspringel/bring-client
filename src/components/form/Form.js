import React, { Component } from "react";
import Description from "./Description";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";

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
        <SubmitButton />
        <hr></hr>
      </div>
    );
  }
}

export default Form;
