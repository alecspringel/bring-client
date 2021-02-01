import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../general/TextInput";
import SendReset from "./SendReset";

const ResetLink = () => {
  const [form, setForm] = useState({ loading: false, response: "", email: "" });

  const handleChange = (e, name) => {
    setForm({ ...form, [name]: e.target.value });
  };

  const setRes = (response) => {
    setForm({ ...form, response });
  };

  const toggleLoading = (value) => {
    setForm({ ...form, loading: value });
  };

  return (
    <div className="content container margin-t20">
      <Background className="flex-row">
        <FormWrapper className="flex-col text-center margin-t20">
          <Icon src={require("../../assets/lock.svg")} />
          <h2 className="margin-tb20">Trouble logging in?</h2>
          <p className="margin-b20">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <TextInput
            placeholder="Email"
            className="margin-b10"
            value={form.email}
            onChange={(e) => handleChange(e, "email")}
            loading={form.loading}
          />
          <SendReset
            setRes={setRes}
            email={form.email}
            toggleLoading={toggleLoading}
            loading={form.loading}
          />
          <ResponseDiv className="flex-row align justify">
            {form.response}
          </ResponseDiv>
          <ForgotPassword to="/login" className="margin-t20">
            Back to login
          </ForgotPassword>
        </FormWrapper>
      </Background>
    </div>
  );
};

export default ResetLink;

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

const ResponseDiv = styled.div`
  height: 60px;
  font-size: 14px;
`;
