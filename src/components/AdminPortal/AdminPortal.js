import React, { Component } from "react";
import SubmissionTile from "./SubmissionTile";
import SubmissionFocusTile from "./SubmissionFocusTile";

class AdminPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>These are some unclicked tiles</h1>
        <SubmissionTile/>
        <SubmissionTile/>
        <SubmissionFocusTile/>
        <hr></hr>
      </div>
    );
  }
}

export default AdminPortal;