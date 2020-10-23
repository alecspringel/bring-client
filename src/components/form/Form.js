import React, { Component } from "react";
import Description from "./Description";
import Header from "./Header";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <Description/>
        <Inputs/>
        <SubmitButton/>
      </div>
    );
  }
}

export default Form;