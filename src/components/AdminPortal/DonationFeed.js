import React, { Component } from "react";
import axios from "axios";
import SubmissionTile from "./SubmissionTile";
import SubmissionFocus from "./focus/SubmissionFocus";

class DonationFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      focusDonation: null,
    };
    this.fetchPendingDonations = this.fetchPendingDonations.bind(this);
    this.focusTile = this.focusTile.bind(this);
  }

  componentDidMount() {
    this.fetchPendingDonations();
  }

  fetchPendingDonations() {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/donations/unresolved";
    axios.get(url + endpoint).then((donations) => {
      this.setState({ donations: donations.data }, console.log(donations));
    });
  }

  focusTile(donation) {
    this.setState({
      focusDonation: donation,
    });
  }

  render() {
    return (
      <div style={{marginBottom: 60}}>
        {this.state.focusDonation && <SubmissionFocus donation={this.state.focusDonation} close={() => this.focusTile(null)}/>}
        <h2 className="text-bold">Pending Donations</h2>
        {this.state.donations &&
          this.state.donations.map((donation) => (
            <SubmissionTile donation={donation} focusTile={this.focusTile} />
          ))}
      </div>
    );
  }
}

export default DonationFeed;
