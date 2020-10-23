import React, { Component } from "react";
// I imagine these should be split into separate components?

class Inputs extends Component {
  render() {
    return (
      <div>
        <h3>Contact Information</h3>
        <section class="first name">
            <input type="text" name="first name" id="first name"  placeholder="First Name" required/>
        </section>
        <br></br>
        <section class="last name">
          <input type="text" name="last name" id="last name" placeholder="Last Name" required/>
        </section>
        <br></br>
        <section class="email">
          <input type="email" name="email" id="email" placeholder="Email" required/>
        </section>
        <br></br>
        <section class="phone number">
          <input type="tel" name="phone number" id="phone number" placeholder="Phone Number" required/>
        </section>
        <br></br>
        <section class="donation description">
          <label for="donation description">Please describe the item you would like to donate:</label>
          <br></br>
          <textarea id="donation description" name="donation description" rows="3" cols="40" placeholder="Description" required></textarea>
        </section>
        <br></br>
      </div>
    );
  }
}

export default Inputs;