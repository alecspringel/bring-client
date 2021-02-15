import React, { Component } from "react";
import { post } from "axios";
import Button from "../general/Button";

class SubmitButton extends Component {
  constructor(props) {
    super(props);
    this.sendCreateDonation = this.sendCreateDonation.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput(e) {
    e.preventDefault();
    var errors = {};
    if (!this.props.files || this.props.files.length === 0) {
      errors.files = "Please upload at least one image";
    }
    if (this.props.first.length === 0) {
      errors.first = "Please provide your first name";
    }
    if (this.props.last.length === 0) {
      errors.last = "Plase provide your last name";
    }
    if (this.props.email.length === 0) {
      errors.email = "Plase provide your email";
    }
    if (this.props.phone.length === 0) {
      errors.phone = "Plase provide your phone number";
    }
    if (this.props.itemName.length === 0) {
      errors.itemName = "Plase provide an item name";
    }
    if (!this.props.preferEmail && !this.props.preferPhone) {
      errors.prefer = "Please select a preferred contact method";
    }
    if (Object.getOwnPropertyNames(errors).length !== 0) {
      this.props.setError(errors);
      console.log("error");
    } else {
      this.sendCreateDonation();
    }
  }

  async sendCreateDonation() {
    this.props.setLoading(true);
    setTimeout(async () => {
      // URL stored in .env
      const url = process.env.REACT_APP_SERVER_URL;
      const endpoint = "/api/donations/create";
      const formData = new FormData();

      // Add form text
      formData.append("first", this.props.first);
      formData.append("last", this.props.last);
      formData.append("itemName", this.props.itemName);
      formData.append("description", this.props.description);
      formData.append("email", this.props.email);
      formData.append("phone", this.props.phone);
      formData.append("preferPhone", this.props.preferPhone);
      formData.append("preferEmail", this.props.preferEmail);

      // Add images to form-data
      Array.from(this.props.files).forEach((file) => {
        formData.append("image", file);
      });

      const config = {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      };
      await post(url + endpoint, formData, config)
        .then((res) => {
          this.props.setLoading(false);
          if (res.status === 200) {
            this.props.toggleSuccess(this.props.submitMore);
            this.props.setError(
              "Thanks for you inquiry! We'll get back to you shortly."
            );
          }
        })
        .catch((err) => {
          this.props.setLoading(false);
          if (err.response) {
            this.props.setError(err.response.data);
          }
        });
    }, 1000);
  }

  render() {
    return (
      <Button
        className={
          this.props.outline
            ? "button primary-outline-btn"
            : "button primary-btn"
        }
        label={this.props.label}
        width="100%"
        onClick={
          !this.props.loading
            ? this.validateInput
            : (e) => {
                e.preventDefault();
              }
        }
        style={this.props.style}
      />
    );
  }
}

export default SubmitButton;
