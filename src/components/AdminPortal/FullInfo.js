import React, { Component } from "react";

class FullInfo extends Component {
  render() {
    return (
      <section className="full-info">
      <h5>[#Num]</h5>
      <h3>[Name]</h3>
      <h4>[Contact]</h4>
      <h3>[Title]</h3>
      <p>[Description]</p>
      <hr></hr>
    </section>
    );
  }
}

export default FullInfo;