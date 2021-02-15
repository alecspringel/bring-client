import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div style={{ margin: "20px 0" }}>
        <h2>Virtual Donations Manager</h2>
        <p className="margin-tb10">
          Use the form below to send photos of your prospective donation
          straight to our Receiving Staff. You may upload up to 5 photos per
          item with a brief description. Our staff will review your submission
          and confirm if we can accept your items, or if you should seek a
          different disposal solution. If we cannot accept your materials
          donation, we will provide you with disposal recommendations.
        </p>
        <p className="margin-tb20">
          Please be sure to include your contact information (on the right) with
          photos of your materials.
        </p>
        <p className="margin-tb20">
          Only one submission per item/type of item. Use “+ add another item”
          button to make multiple submissions with the same contact information.
        </p>
        <a href="https://bringrecycling.org/things-we-cannot-take/">
          <p
            className="text-light text-bold margin-tb20"
            href="https://bringrecycling.org/things-we-cannot-take/"
            style={{ textDecoration: "underline" }}
          >
            See our list of items we cannot accept
          </p>
        </a>
      </div>
    );
  }
}

export default Description;
