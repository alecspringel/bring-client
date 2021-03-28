import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div style={{ margin: "20px 0" }}>
        <h2>Virtual Materials Donation Portal</h2>
        <p className="margin-tb10">
          <span style={{ fontWeight: 500 }}>
            You can now send photos of your potential materials donation
            directly to our Receiving Staff!
          </span>{" "}
          Use the form below to upload your photos of materials you’d like to
          donate, including a brief description. Our staff will review your
          submission and confirm if we can accept your items, or if you should
          seek a different disposal solution. If we cannot accept your materials
          donation, we will provide you with disposal recommendations.
        </p>
        <p className="margin-tb20">
          Please include your contact information along with your photo
          submissions. Only one submission per item or type of item is
          necessary. You will receive a response within one business day using
          your preferred contact method. (If you select Email, be sure to check
          your spam folder if you do not receive a timely response.)
        </p>
        <p className="margin-tb20">
          Use the “Add Another Item” button to make multiple submissions with
          the same contact information.
        </p>
        <p href="https://bringrecycling.org/things-we-cannot-take/">
          <a
            className="text-light text-bold margin-tb20"
            href="https://bringrecycling.org/things-we-cannot-take/"
            style={{ textDecoration: "underline" }}
          >
            Before you submit, see our list of materials we cannot accept.
          </a>{" "}
          BRING reserves the right to change the acceptance decision for any
          reason.
        </p>
      </div>
    );
  }
}

export default Description;
