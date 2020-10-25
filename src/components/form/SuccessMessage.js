import React, { Component } from "react";

class SuccessMessage extends Component {
  render() {
    return (
      <div>
        <h2>Submitted</h2>
        <p className="margin-tb10">
        Thank you!  We'll get back to you soon.
        </p>
        <button type="button" value="submit-another-item">Submit another item</button>
      </div>
    );
  }
}

export default SuccessMessage;