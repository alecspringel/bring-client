import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import SubmissionTile from "./SubmissionTile";
import SubmissionFocus from "./focus/SubmissionFocus";
import LogoImg from "../../assets/bring/logo-icon-grey.svg";

class DonationFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      focusDonation: null,
      loading: true,
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
      this.setState({ donations: donations.data, loading: false }, console.log(donations));
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
        {this.state.donations.length === 0 && !this.state.loading &&
          <NoPendingMsg className="flex-col">
            <img src={LogoImg} style={{height: 60}} alt={"logo"}/>
            <h1 className="text-reg text-light">You're all caught up!</h1>
          </NoPendingMsg>
        }
      </div>
    );
  }
}

export default DonationFeed;

const NoPendingMsg = styled.div`
  height: 40vh;
  align-items: center;
  justify-content: center;
`
