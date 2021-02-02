import React, { Component, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
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
    loading: false,
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  // Wait for context to determine if a token is stored,
  // if so, don't render login page, just redirect.
  if (user !== false) {
    return null;
  }

  var errors = [];
  if (typeof data.errors === "string") {
    errors.push(data.errors);
  } else {
    for (var key in data.errors) {
      errors.push(data.errors[key]);
    }
  }

  return (
    <div className="content container margin-t20">
      <Background className="flex-row">
        <FormWrapper className="flex-col text-center margin-t20">
          <Icon src={require("../../assets/login.svg")} />
          <h2 className="margin-tb20">Admin Login</h2>
          <TextInput
            placeholder="Email"
            className="margin-b10"
            name="email"
            value={data.email}
            onChange={onChange}
            aria-label="email"
            error={data.errors.email}
            loading={data.loading}
          />
          <TextInput
            placeholder="Password"
            className="margin-b10"
            name="password"
            type="password"
            value={data.password}
            onChange={onChange}
            aria-label="password"
            error={data.errors.password}
            loading={data.loading}
          />
          <SendLogin
            email={data.email}
            password={data.password}
            handleData={handleData}
            loading={data.loading}
          />
          <div className="margin-t20">
            {errors.length > 0 &&
              errors.map((error) => (
                <p className="primary-color" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className="margin-t20">
            <ForgotPassword to="/login/reset">Forgot password?</ForgotPassword>
          </div>
        </FormWrapper>
      </Background>
    </div>
  );
};

export default withRouter(Login);

const Background = styled.div`
  align-items: center;
  justify-content: center;
  width: 360px;
  margin: auto; ;
`;

const FormWrapper = styled.form`
  width: 100%;
  padding: 30px;
  background: #fff;
  border: 1px solid #cecece;
  border-radius: 6px;
`;

const ForgotPassword = styled(Link)`
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.img`
  height: 44px;
  margin: 5px 0;
`;
