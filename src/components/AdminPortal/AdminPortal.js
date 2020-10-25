import React, { Component } from "react";
import DonationFeed from "./DonationFeed";

class AdminPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <DonationFeed/>
        {/* <SubmissionFocusTile/> */}
        {/* <hr></hr> */}
      </div>
    );
  }
}

export default AdminPortal;