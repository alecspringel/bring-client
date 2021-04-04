import React, { Component } from "react";
import styled from "styled-components";
import resizeImgs from "../../utils/resizeImgs";
import Checkbox from "../general/Checkbox";
import ErrorDiv from "../general/ErrorDiv";
import TextInput from "../general/TextInput";
import PhotoUpload from "./PhotoUpload";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
      fileUrls: [],
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
      errors: {},
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.submitMore = this.submitMore.bind(this);
    this.setError = this.setError.bind(this);
    this.removeFiles = this.removeFiles.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(bool) {
    this.setState({
      loading: bool,
    });
  }

  setError(errors) {
    this.setState({
      errors,
    });
  }

  // Handles changes from input fields
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

  removeFiles() {
    this.setState({
      files: null,
      fileUrls: [],
    });
  }

  async handleFiles(e) {
    const { imageUrls, resizedFiles } = await resizeImgs(e.target.files);
    console.log("setstate");
    this.setState({
      files: resizedFiles,
      fileUrls: imageUrls,
    });
  }

  toggleSuccess(submitMore = false) {
    if (submitMore) {
      this.submitMore();
      return;
    } else {
      this.setState({
        showSuccess: !this.state.showSuccess,
      });
    }
  }

  submitMore() {
    this.setState({
      files: null,
      fileUrls: [],
      showSuccess: false,
      itemName: "",
      description: "",
    });
  }

  render() {
    return (
      <>
        {this.state.showSuccess && (
          <SuccessMessage submitMore={this.submitMore} />
        )}
        <FormWrapper className="flex-row">
          <ImageSection>
            <PhotoUpload
              files={this.state.files}
              fileUrls={this.state.fileUrls}
              handleChange={this.handleChange}
              handleFiles={this.handleFiles}
              itemName={this.state.itemName}
              description={this.state.description}
              errors={this.state.errors}
              removeFiles={this.removeFiles}
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
              error={this.state.errors.first}
              loading={this.state.loading ? "true" : undefined}
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
              error={this.state.errors.last}
              loading={this.state.loading ? "true" : undefined}
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
              error={this.state.errors.email}
              loading={this.state.loading ? "true" : undefined}
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
              error={this.state.errors.phone}
              loading={this.state.loading ? "true" : undefined}
              maxLength="20"
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
                  aria-label="prefer email"
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
                  aria-label="prefer text message"
                  onClick={this.handleCheckbox}
                />{" "}
                <span className="noselect" style={{ marginLeft: 7 }}>
                  <label htmlFor="preferPhone">Text</label>
                </span>
              </div>
            </CheckboxDiv>
            <SubmitButton
              outline
              submitMore
              label="+ add another item"
              setError={this.setError}
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
              setLoading={this.setLoading}
              loading={this.state.loading ? "true" : undefined}
            />
            <SubmitButton
              label="submit"
              setError={this.setError}
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
              setLoading={this.setLoading}
              style={{ marginTop: 10 }}
              loading={this.state.loading ? "true" : undefined}
            />

            <ErrorDiv errors={this.state.errors} />
          </FormSection>
        </FormWrapper>
      </>
    );
  }
}

export default Inputs;

const FormWrapper = styled.form`
  justify-content: space-between;
  @media (max-width: 756px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 0.95;
`;

const FormSection = styled.div`
  width: 250px;
  @media (max-width: 756px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

const CheckboxDiv = styled.div`
  justify-content: space-between;
  width: 70%;
`;
