import React, { Component } from "react";
import Header from "./Header";
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
        <Header/>
        <SubmissionTile/>
        <SubmissionTile/>
        <SubmissionTile/>
        <hr></hr>
      </div>
    );
  }
}

export default AdminPortal;