import React, { Component } from "react";

class SubmissionTile extends Component {
  render() {
    return (
      <section className="submission-tile">
      <h3>[Name]</h3>
      <h4>[Date]</h4>
      <p>[Description]</p>
      <hr></hr>
    </section>
    );
  }
}

export default SubmissionTile;