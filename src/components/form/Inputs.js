import React, { Component } from "react";
// I imagine these should be split into separate components?

class Inputs extends Component {
  render() {
    return (
      <div>
        <h3>Contact Information</h3>
        <section>
          <input
            type="text"
            name="first name"
            placeholder="First Name"
            required
          />
        </section>
        <br></br>
        <section>
          <input
            type="text"
            name="last name"
            placeholder="Last Name"
            required
          />
        </section>
        <br></br>
        <section>
          <input type="email" name="email" placeholder="Email" required />
        </section>
        <br></br>
        <section>
          <input
            type="tel"
            name="phone-number"
            placeholder="Phone Number"
            required
          />
        </section>
        <br></br>
        <section>
          <label for="donation-description">
            Please describe the item you would like to donate:
          </label>
          <br></br>
          <textarea
            name="donation-description"
            rows="3"
            cols="40"
            placeholder="Description"
            required
          ></textarea>
        </section>
        <br></br>
      </div>
    );
  }
}

export default Inputs;
