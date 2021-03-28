import React, { useContext, useEffect, useState } from "react";
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
import { UserContext } from "../../../context/UserProvider";
import axios from "axios";

const SelectResponse = ({
  donation,
  responseType,
  nextSubmission,
  setType,
  shrinkImage,
  responses,
}) => {
  // const user = useContext(UserContext);
  // console.log(user);
  const [state, setState] = useState({
    options: [...responses[responseType], { label: "Custom", value: "" }],
    message: "Select a reason or choose a custom response",
    shortMsg: "Response ...",
  });

  const setMessage = (option) => {
    setState({
      ...state,
      shortMsg: option.label,
      message: option.value,
    });
  };

  const handleCustom = (e) => {
    setState({
      ...state,
      message: e.target.value,
    });
  };

  return (
    <>
      {responseType === "Accept" && (
        <YesCircle
          className="margin-b10"
          style={{ cursor: "default" }}
          aria-label={"accept"}
        />
      )}
      {responseType === "Maybe" && (
        <MaybeCircle
          className="margin-b10"
          style={{ cursor: "default" }}
          aria-label={"maybe"}
        />
      )}
      {responseType === "Decline" && (
        <NoCircle
          className="margin-b10"
          style={{ cursor: "default" }}
          aria-label={"decline"}
        />
      )}

      <Title className="text-center">
        {donation.itemName},{" "}
        <span className="text-reg">
          from {donation.first} {donation.last}
        </span>
      </Title>
      <Selector
        className="margin-t20"
        options={state.options}
        onChange={setMessage}
        value={state.shortMsg}
        placeholder={state.shortMsg}
      />
      <DynamicTextArea
        className="margin-t20 flex-1"
        style={{ width: "100%" }}
        placeholder={
          state.shortMsg === "Custom" ? "Enter your reply ..." : state.message
        }
        value={state.message}
        onChange={state.shortMsg === "Custom" ? handleCustom : () => {}}
        typable={state.shortMsg === "Custom"}
      />
      <SendMessageBtn
        donation={donation}
        responseType={responseType}
        message={state.message}
        nextSubmission={nextSubmission}
        setType={setType}
        shrinkImage={shrinkImage}
      />
    </>
  );
};

export default SelectResponse;

const Title = styled.h2`
  @media (max-height: 500px) {
    font-size: 1.2em;
  }
`;

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

const YesCircle = styled(YesBtn)`
  @media (max-height: 500px) {
    height: 40px;
    width: 40px;
  }
`;

const MaybeCircle = styled(MaybeBtn)`
  @media (max-height: 500px) {
    height: 40px;
    width: 40px;
  }
`;

const NoCircle = styled(NoBtn)`
  @media (max-height: 500px) {
    height: 40px;
    width: 40px;
  }
`;
