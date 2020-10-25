import React, { Component } from "react";
import { post } from 'axios';
import Button from "../general/Button";

class SubmitButton extends Component {
  constructor(props) {
    super(props);
    this.sendCreateDonation = this.sendCreateDonation.bind(this);
  }

  async sendCreateDonation(e) {
    e.preventDefault()
    // URL stored in .env
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/donations/create"
    const formData = new FormData();

    // Add form text
    formData.append('first', this.props.first)
    formData.append('last', this.props.last)
    formData.append('itemName', this.props.itemName)
    formData.append('description', this.props.description)
    formData.append('email', this.props.email)
    formData.append('phone', this.props.phone)
    formData.append('preferPhone', this.props.preferPhone)
    formData.append('preferEmail', this.props.preferEmail)
    
    // Add images to form-data
    console.log(this.props.files)
    Array.from(this.props.files).forEach((file) => {
      formData.append('image', file)
    })

    const config = {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      }
    }
    await post(url + endpoint, formData, config).then((res) => {
      console.log(res);
      this.props.toggleSuccess()
    })
  }

  render() {
  return (<Button className="button primary-btn" label="SUBMIT" width="100%" onClick={this.sendCreateDonation}/>);
  }
};

export default SubmitButton;
