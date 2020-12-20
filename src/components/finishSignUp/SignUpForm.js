import React, { useContext, useState } from "react";
import TextInput from "../general/TextInput";
import Button from "../general/Button";
import styled from "styled-components";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";

const SignUpForm = () => {
  const user = useContext(UserContext);
  const [data, setData] = useState({
    first: "",
    last: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const sendSignUp = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/finish";
    axios
      .post(url + endpoint, data)
      .then((res) => {
        console.log(res, "response");
      })
      .catch((err) => {
        setErrors({ ...err.response.data });
      });
  };
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
          errors === typeof "object" &&
          Object.keys(errors).map((error) => (
            <p className="primary-color">{errors[error]}</p>
          ))}
        {errors && errors === typeof "string" && (
          <p className="primary-color">{errors}</p>
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
