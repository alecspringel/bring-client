import React, { Component } from "react";
import styled, { css } from "styled-components";
import NoBtn from "../../general/NoBtn";
import Selector from "../../general/Selector";
import TextArea from "../../general/TextArea";
import SendMessageBtn from "./SendMessageBtn";
import {
  YES_RESPONSES,
  NO_RESPONSES,
  MAYBE_RESPONSES,
} from "../../../constants/responses";
import YesBtn from "../../general/YesBtn";
import MaybeBtn from "../../general/MaybeBtn";

class SelectResponse extends Component {
  constructor(props) {
    super(props);
    // If the response type is yes/maybe, default to the first option
    var options = [];
    var shortMsg = "Response ...";
    var message = "Select a reason or choose a custom response";
    if (this.props.responseType === "YES") {
      options = YES_RESPONSES;
      shortMsg = options[0].label;
      message = options[0].value;
    } else if (this.props.responseType === "MAYBE") {
      options = MAYBE_RESPONSES;
      shortMsg = options[0].label;
      message = options[0].value;
    } else {
      options = NO_RESPONSES;
    }

    this.state = {
      options,
      message,
      shortMsg,
    };
    this.setMessage = this.setMessage.bind(this);
    this.handleCustom = this.handleCustom.bind(this);
  }

  setMessage(option) {
    this.setState({
      shortMsg: option.label,
      message: option.value,
    });
  }

  handleCustom(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const { donation, responseType, nextSubmission, setType } = this.props;

    return (
      <>
        {responseType === "YES" && (
          <YesBtn
            className="margin-b10"
            style={{ cursor: "default" }}
            aria-label={"yes"}
          />
        )}
        {responseType === "MAYBE" && (
          <MaybeBtn
            className="margin-b10"
            style={{ cursor: "default" }}
            aria-label={"maybe"}
          />
        )}
        {responseType === "NO" && (
          <NoBtn
            className="margin-b10"
            style={{ cursor: "default" }}
            aria-label={"no"}
          />
        )}

        <h2 className="text-center">
          {donation.itemName},{" "}
          <span className="text-reg">
            from {donation.first} {donation.last}
          </span>
        </h2>
        <Selector
          className="margin-t20"
          options={this.state.options}
          onChange={this.setMessage}
          value={this.state.shortMsg}
          placeholder={this.state.shortMsg}
        />
        <DynamicTextArea
          className="margin-t20"
          style={{ width: "100%", height: 150 }}
          placeholder={
            this.state.shortMsg === "Custom"
              ? "Enter your reply ..."
              : this.state.message
          }
          value={this.state.message}
          onChange={
            this.state.shortMsg === "Custom" ? this.handleCustom : () => {}
          }
          typable={this.state.shortMsg === "Custom"}
        />
        <SendMessageBtn
          donation={donation}
          responseType={responseType}
          message={this.state.message}
          nextSubmission={nextSubmission}
          setType={setType}
        />
      </>
    );
  }
}

export default SelectResponse;

const DynamicTextArea = styled(TextArea)`
  background: #f5f5f5;
  border: 1px solid #dddddd;
  color: #a1a1a1;

  ${(props) =>
    props.typable &&
    css`
      background: #fff;
      border: 1px solid #dddddd;
      color: #5c5b5a;
    `}
`;
