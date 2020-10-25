import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../general/Checkbox";
import TextInput from "../general/TextInput";
import PhotoUpload from "./PhotoUpload";
import SubmitButton from "./SubmitButton";

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
  }

  // Handles changes from input fields
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state)
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

  render() {
    return (
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
            required
          />
          <TextInput
            style={{ marginBottom: 15 }}
            value={this.state.last}
            onChange={this.handleChange}
            type="text"
            name="last"
            placeholder="Last Name"
            required
          />
          <TextInput
            style={{ marginBottom: 15 }}
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <TextInput
            style={{ marginBottom: 15 }}
            value={this.state.phone}
            onChange={this.handleChange}
            type="tel"
            name="phone"
            placeholder="Phone Number"
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
                onClick={this.handleCheckbox}
              />{" "}
              <span className="noselect" style={{ marginLeft: 7 }}>
                Email
              </span>
            </div>
            <div className="flex-row">
              <Checkbox
                isChecked={this.state.preferPhone}
                name="preferPhone"
                onClick={this.handleCheckbox}
              />{" "}
              <span className="noselect" style={{ marginLeft: 7 }}>
                Text
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
          />
        </FormSection>
      </FormWrapper>
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
