import React, { Component } from "react";
import FullInfo from "./FullInfo";
import ResponseSelect from "./ResponseSelect";
import YesNoMaybeButtons from "./YesNoMaybeButtons";

class SubmissionFocus extends Component {
  render() {
    return (
      <section className="submission-focus">
        <h1>These are components for a tile that has been clicked for review</h1>
        <button type="button" value="back">Back</button>
        <FullInfo />
        <hr></hr>
        <YesNoMaybeButtons />
        <hr></hr>
        <h1>These are components for after yes/no/maybe has been selected</h1>
        <button type="button" value="back">Back</button>
        <ResponseSelect />
        <button type="button" value="Submit">Back</button>
      </section>
    );
  }
}

export default SubmissionFocus;