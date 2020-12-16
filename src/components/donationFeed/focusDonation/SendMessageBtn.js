import React, { Component } from "react";
import Button from "../../general/Button";
import { post } from "axios";

class SendMessageBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendResponse = this.sendResponse.bind(this);
  }

  sendResponse() {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/donations/respond";
    const data = {
      donationId: this.props.donation._id,
      responseMessage: this.props.message,
      responseType: this.props.responseType,
    };

    //Send post with axios
    post(url + endpoint, data)
      .then(
        function (response) {
          this.props.setType(null);
          this.props.nextSubmission();
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { responseType } = this.props;
    var cname = "text-white button ";
    if (responseType === "YES") {
      cname = cname + "green-bg";
    } else if (responseType === "MAYBE") {
      cname = cname + "yellow-bg";
    } else {
      cname = cname + "primary-btn";
    }

    return (
      <Button
        label="SEND"
        className={cname}
        style={{ position: "absolute", bottom: 60, width: "90%" }}
        onClick={this.sendResponse}
      />
    );
  }
}

export default SendMessageBtn;
