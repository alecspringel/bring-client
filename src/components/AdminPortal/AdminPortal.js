import React, { Component } from "react";
import DonationFeed from "./donationFeed/DonationFeed";

class AdminPortal extends Component {
  render() {
    return (
      <div>
        <DonationFeed/>
      </div>
    );
  }
}

export default AdminPortal;