import React, { Component } from "react";
import SubmissionTile from "./SubmissionTile";

class AdminPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SubmissionTile/>
        <SubmissionTile/>
        <SubmissionTile/>
        <hr></hr>
      </div>
    );
  }
}

export default AdminPortal;