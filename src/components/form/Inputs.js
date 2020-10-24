import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../general/Checkbox";
import TextInput from "../general/TextInput";
import PhotoUpload from "./PhotoUpload";
import SubmitButton from "./SubmitButton";
// I imagine these should be split into separate components?

class Inputs extends Component {
  render() {
    return (
      <Wrapper className="flex-row">
        <ImageSection>
          <PhotoUpload />
        </ImageSection>
        <FormSection>
          <h3 className="text-black">Donation Approval</h3>
          <h4 className="text-light margin-tb10">Contact Information</h4>
          <TextInput
            style={{ marginBottom: 15 }}
            type="text"
            name="first name"
            placeholder="First Name"
            required
          />
          <TextInput
            style={{ marginBottom: 15 }}
            type="text"
            name="last name"
            placeholder="Last Name"
            required
          />
          <TextInput
            style={{ marginBottom: 15 }}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <TextInput
            style={{ marginBottom: 15 }}
            type="tel"
            name="phone-number"
            placeholder="Phone Number"
            required
          />
          <h4 className="text-light margin-t10 margin-b10">
            Preferred Contact
          </h4>
          <CheckboxDiv className="flex-row margin-b20">
            <div className="flex-row">
              <Checkbox isChecked={true} /> <span style={{marginLeft: 7}}>Email</span>
            </div>
            <div className="flex-row">
              <Checkbox isChecked={false} /> <span style={{marginLeft: 7}}>Text</span>
            </div>
          </CheckboxDiv>
          <SubmitButton/>
          <br></br>
        </FormSection>
      </Wrapper>
    );
  }
}

export default Inputs;

const Wrapper = styled.div`
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
