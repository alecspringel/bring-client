import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div>
        <h2>Confirming Donations</h2>
        <p className="margin-tb10">
          Here at BRING, we get hundreds of donations each month. We wish we
          could accept every donation but there are some items we cannot accept.
          Before coming in, upload a photo of the items you would like to donate
          with a brief description. Our staff will reach out to you to confirm
          if we can take the item or not.
        </p>
        <p className="text-light text-bold margin-tb20" style={{ textDecoration: "underline" }}>
          See our list of items we cannot accept
        </p>
      </div>
    );
  }
}

export default Description;
