import React, { useContext } from "react";
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const SendLogin = ({ email }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/reset";
    const userData = {
      email: email,
    };
    post(url + endpoint, userData).then((res) => {});
  };

  return (
    <input
      className="button primary-btn"
      value="Send Reset Link"
      type="submit"
      onClick={onSubmit}
    />
  );
};

export default SendLogin;
