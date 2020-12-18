import React, { Component, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import TextInput from "../general/TextInput";
import { UserContext } from "../../context/UserProvider";
import SendLogin from "./SendLogin";
import { useHistory } from "react-router";

const Login = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/admin");
    }
  }, [user]);

  const [data, setData] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Wait for context to determine if a token is stored,
  // if so, don't render login page, just redirect.
  if (user !== false) {
    return null;
  }

  return (
    <Background className="flex-row">
      <FormWrapper className="flex-col text-center">
        <h2 className="margin-tb20">Admin Login</h2>
        <TextInput
          placeholder="Email"
          className="margin-b10"
          name="email"
          value={data.email}
          onChange={onChange}
          aria-label="email"
        />
        <TextInput
          placeholder="Password"
          className="margin-b10"
          name="password"
          type="password"
          value={data.password}
          onChange={onChange}
          aria-label="password"
        />
        <SendLogin email={data.email} password={data.password} />
      </FormWrapper>
    </Background>
  );
};

export default withRouter(Login);

const Background = styled.div`
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  margin: auto; ;
`;

const FormWrapper = styled.form`
  width: 100%;
`;
