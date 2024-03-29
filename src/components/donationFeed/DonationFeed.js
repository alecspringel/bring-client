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
      responses: { accept: [], maybe: [], decline: [] },
    };
    this.fetchPendingDonations = this.fetchPendingDonations.bind(this);
    this.focusTile = this.focusTile.bind(this);
    this.nextSubmission = this.nextSubmission.bind(this);
    this.sort = this.sort.bind(this);
    this.fetchResponses = this.fetchResponses.bind(this);
  }

  componentDidMount() {
    this.fetchPendingDonations();
    this.fetchResponses();
  }

  sort(option) {
    this.fetchPendingDonations(option.value);
  }

  fetchResponses() {
    const endpoint = "/api/responses";
    axios
      .get(process.env.REACT_APP_SERVER_URL + endpoint)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          let categories = { Accept: [], Maybe: [], Decline: [] };
          res.data.forEach((response) => {
            const option = { label: response.title, value: response.message };
            categories[response.category].push(option);
          });
          this.setState({ responses: categories });
        }
      })
      .catch((err) => {
        // Handle request error
      });
  }

  fetchPendingDonations(sort) {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/donations/unresolved";
    axios
      .get(url + endpoint, { params: sort })
      .then((donations) => {
        this.setState({ donations: donations.data, loading: false });
      })
      .catch((err) => {
        // Handle request error
      });
  }

  focusTile(donation, index) {
    if (donation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    this.setState({
      focusDonation: donation,
      focusIndex: index,
    });
  }

  nextSubmission() {
    var donations = this.state.donations;
    var focusIndex = null;
    donations.splice(this.state.focusIndex, 1);
    // Reached the last in list
    if (this.state.focusIndex !== donations.length + 1) {
      focusIndex = focusIndex + 1;
    }
    this.setState({
      donations,
      focusIndex,
      focusDonation: donations[focusIndex],
    });
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
              responses={this.state.responses}
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
