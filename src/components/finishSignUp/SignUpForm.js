import React, { useContext, useState } from "react";
import TextInput from "../general/TextInput";
import Button from "../general/Button";
import styled from "styled-components";
import { UserContext, UserDispatchContext } from "../../context/UserProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);
  const [data, setData] = useState({
    first: "",
    last: "",
    password: "",
    confirm: "",
  });
  // Handles errors from the endpoint response
  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Sends signup request
  const sendSignUp = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/finish";
    axios
      .post(url + endpoint, data)
      .then((res) => {
        // Sign user out after sign up and send backt to login
        localStorage.removeItem("bringToken");
        setUser(false);
        history.push("/login");
      })
      .catch((err) => {
        setErrors({ ...err.response.data });
      });
  };
  console.log(typeof errors);
  return (
    <FormWrapper
      className="flex-col justify align margin-t20"
      onSubmit={sendSignUp}
    >
      <TextInput
        name="email"
        placeholder={user && user.email}
        onChange={handleChange}
        className="margin-b10"
        id="email"
        type="text"
        autocomplete="username email"
        disabled
      />
      <TextInput
        name="first"
        placeholder="First Name"
        className="margin-b10"
        onChange={handleChange}
        id="first"
        type="text"
        autocomplete="given-name"
        aria-label="first name"
        error={errors && errors.first}
      />
      <TextInput
        name="last"
        placeholder="Last Name"
        className="margin-b10"
        onChange={handleChange}
        id="last"
        type="text"
        autocomplete="family-name"
        aria-label="last/family name"
        error={errors && errors.last}
      />
      <TextInput
        name="password"
        placeholder="Password"
        type="password"
        className="margin-b10"
        onChange={handleChange}
        id="password"
        aria-label="password"
        error={errors && errors.password}
      />
      <TextInput
        name="confirm"
        placeholder="Confirm Password"
        type="password"
        className="margin-b10"
        onChange={handleChange}
        id="confirm"
        aria-label="confirm password"
        error={errors && errors.confirm}
      />
      <p className="text-light p-small">
        Passwords must be at least 6 characters long &amp; contain a number
      </p>
      <Button
        className="button primary-btn margin-t20"
        label="Sign up"
        style={{ width: "100%", marginTop: 30 }}
        type="submit"
      />
      <ErrorDiv>
        {errors &&
          typeof errors === "object" &&
          Object.keys(errors).map((error) => (
            <p className="primary-color" key={errors[error]}>
              {errors[error]}
            </p>
          ))}
        {errors && typeof errors === "string" && (
          <p className="primary-color" key={errors}>
            {errors}
          </p>
        )}
      </ErrorDiv>
    </FormWrapper>
  );
};

export default SignUpForm;

const FormWrapper = styled.form`
  position: relative;
  width: 300px;
`;

const ErrorDiv = styled.div`
  position: absolute;
  top: 105%;
`;
