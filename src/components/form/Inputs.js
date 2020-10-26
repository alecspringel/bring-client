import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../general/Checkbox";
import TextInput from "../general/TextInput";
import PhotoUpload from "./PhotoUpload";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
      first: "",
      last: "",
      email: "",
      phone: "",
      itemName: "",
      description: "",
      preferEmail: false,
      preferPhone: false,
      // Success Modal
      showSuccess: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.submitMore = this.submitMore.bind(this);
  }

  // Handles changes from input fields
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  // Handles changes from checkbox fields
  // These are booleans, so clicking should be ! of current value
  handleCheckbox(e) {
    this.setState({
      [e.target.getAttribute("name")]: !this.state[
        e.target.getAttribute("name")
      ],
    });
  }

  handleFiles(e) {
    this.setState({
      files: e.target.files,
    });
  }

  toggleSuccess() {
    this.setState({
      showSuccess: !this.state.showSuccess,
    });
  }

  submitMore() {
    this.setState({
      files: null,
      showSuccess: false,
      itemName: "",
      description: "",
    });
  }

  render() {
    return (
      <>
        {this.state.showSuccess && <SuccessMessage submitMore={this.submitMore}/>}
        <FormWrapper className="flex-row">
          <ImageSection>
            <PhotoUpload
              files={this.state.files}
              handleChange={this.handleChange}
              handleFiles={this.handleFiles}
              itemName={this.state.itemName}
              description={this.state.description}
            />
          </ImageSection>
          <FormSection>
            <h3 className="text-black">Donation Approval</h3>
            <h4 className="text-light margin-tb10">Contact Information</h4>
            <TextInput
              style={{ marginBottom: 15 }}
              value={this.state.first}
              onChange={this.handleChange}
              type="text"
              name="first"
              placeholder="First Name"
              aria-label="first name"
              required
            />
            <TextInput
              style={{ marginBottom: 15 }}
              value={this.state.last}
              onChange={this.handleChange}
              type="text"
              name="last"
              placeholder="Last Name"
              aria-label="last name"
              required
            />
            <TextInput
              style={{ marginBottom: 15 }}
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
              aria-label="email"
              required
            />
            <TextInput
              style={{ marginBottom: 15 }}
              value={this.state.phone}
              onChange={this.handleChange}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              aria-label="phone number"
              required
            />
            <h4 className="text-light margin-t10 margin-b10">
              Preferred Contact
            </h4>
            <CheckboxDiv className="flex-row margin-b20 noselect">
              <div className="flex-row">
                <Checkbox
                  isChecked={this.state.preferEmail}
                  name="preferEmail"
                  id="preferEmail"
                  onClick={this.handleCheckbox}
                />{" "}
                <span className="noselect" style={{ marginLeft: 7 }}>
                  <label htmlFor="preferEmail">Email</label>
                </span>
              </div>
              <div className="flex-row">
                <Checkbox
                  isChecked={this.state.preferPhone}
                  name="preferPhone"
                  id="preferPhone"
                  onClick={this.handleCheckbox}
                />{" "}
                <span className="noselect" style={{ marginLeft: 7 }}>
                <label htmlFor="preferPhone">Text</label>
                </span>
              </div>
            </CheckboxDiv>
            <SubmitButton
              files={this.state.files}
              first={this.state.first}
              last={this.state.last}
              email={this.state.email}
              phone={this.state.phone}
              itemName={this.state.itemName}
              description={this.state.description}
              preferEmail={this.state.preferEmail}
              preferPhone={this.state.preferPhone}
              toggleSuccess={this.toggleSuccess}
            />
          </FormSection>
        </FormWrapper>
      </>
    );
  }
}

export default Inputs;

const FormWrapper = styled.form`
  justify-content: space-between;
`;

const ImageSection = styled.div`
  flex: 0.95;
`;

const FormSection = styled.div`
  width: 250px;
`;

const CheckboxDiv = styled.div`
  justify-content: space-between;
  width: 70%;
`;
