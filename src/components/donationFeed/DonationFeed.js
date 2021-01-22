import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import SubmissionTile from "./SubmissionTile";
import SubmissionFocus from "./focusDonation/SubmissionFocus";
import LogoImg from "../../assets/bring/logo-icon-grey.svg";
import FeedOptions from "./FeedOptions";
import { withRouter } from "react-router-dom";

class DonationFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      focusDonation: null,
      focusIndex: null,
      loading: true,
      sort: { createdDate: 1 },
    };
    this.fetchPendingDonations = this.fetchPendingDonations.bind(this);
    this.focusTile = this.focusTile.bind(this);
    this.nextSubmission = this.nextSubmission.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    this.fetchPendingDonations();
  }

  sort(option) {
    this.fetchPendingDonations(option.value);
  }

  fetchPendingDonations(sort) {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/donations/unresolved";
    axios
      .get(url + endpoint, { params: sort })
      .then((donations) => {
        this.setState(
          { donations: donations.data, loading: false },
          console.log(donations)
        );
      })
      .catch((err) => {
        // Handle request error
      });
  }

  focusTile(donation, index) {
    this.setState({
      focusDonation: donation,
      focusIndex: index,
    });
  }

  nextSubmission() {
    var donations = this.state.donations;
    var focusIndex = null;
    console.log(this.state);
    donations.splice(this.state.focusIndex, 1);
    // Reached the last in list
    if (this.state.focusIndex !== donations.length + 1) {
      focusIndex = focusIndex + 1;
    }
    this.setState(
      {
        donations,
        focusIndex,
        focusDonation: donations[focusIndex],
      },
      console.log(this.state)
    );
  }

  render() {
    return (
      <div className="content container margin-t20">
        <div style={{ marginBottom: 60 }}>
          {this.state.focusDonation && (
            <SubmissionFocus
              donation={this.state.focusDonation}
              close={() => this.focusTile(null)}
              nextSubmission={this.nextSubmission}
            />
          )}
          <FeedOptions sort={this.sort} />
          {this.state.donations &&
            this.state.donations.map((donation, index) => (
              <SubmissionTile
                donation={donation}
                focusTile={this.focusTile}
                index={index}
                key={index}
              />
            ))}
          {this.state.donations.length === 0 && !this.state.loading && (
            <NoPendingMsg className="flex-col">
              <img
                src={LogoImg}
                style={{ height: 60 }}
                alt="BRING hand icon logo"
              />
              <h1 className="text-reg text-light">You're all caught up!</h1>
            </NoPendingMsg>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(DonationFeed);

const NoPendingMsg = styled.div`
  height: 40vh;
  align-items: center;
  justify-content: center;
`;
