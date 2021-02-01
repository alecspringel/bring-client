import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../general/TextInput";
import SendNewPassword from "./SendNewPassword";

const ResetPassword = ({ ...props }) => {
  let { tokenId, hashedId } = useParams();
  const [form, setForm] = useState({ password: "", confirm: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="content container margin-t20">
      <Background className="flex-row">
        <FormWrapper className="flex-col text-center margin-t20">
          <Icon src={require("../../assets/lock.svg")} />
          <h2 className="margin-tb20">Update Password</h2>
          <p className="margin-b20">
            Password must be between 6-20 characters and include a number.
          </p>
          <TextInput
            placeholder="Password"
            className="margin-b10"
            name="password"
            onChange={handleChange}
          />
          <TextInput
            placeholder="Confirm Password"
            className="margin-b10"
            name="confirm"
            onChange={handleChange}
          />
          <SendNewPassword tokenId={tokenId} hashedId={hashedId} form={form} />
          <ForgotPassword to="/login" className="margin-t20">
            Back to login
          </ForgotPassword>
        </FormWrapper>
      </Background>
    </div>
  );
};

export default ResetPassword;

const Background = styled.div`
  align-items: center;
  justify-content: center;
  width: 360px;
  margin: auto;
`;

const FormWrapper = styled.form`
  width: 100%;
  padding: 30px;
  background: #fff;
  border: 1px solid #cecece;
  border-radius: 6px;
`;

const Icon = styled.img`
  height: 44px;
`;

const ForgotPassword = styled(Link)`
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
