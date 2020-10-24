import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div>
        <h2>Confirming Donations</h2>
        <p className="margin-tb10">
        To confirm whether we can accept your donation, you can upload up to 5 photos 
        of the items you would like to donate with a brief description. Our 
        staff will reach out to you to confirm if we can take the items or not.  
        If we can’t accept your items, we can help you find the best place to take them.
        </p>
        <a href="https://bringrecycling.org/things-we-cannot-take/">
            <p className="text-light text-bold margin-tb20" href="https://bringrecycling.org/things-we-cannot-take/" style={{ textDecoration: "underline" }}>
            See our list of items we cannot accept
            </p>
        </a>
      </div>
    );
  }
}

export default Description;
