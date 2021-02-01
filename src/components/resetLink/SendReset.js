import React, { useContext } from "react";
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const SendLogin = ({ email, setRes, toggleLoading, loading }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    toggleLoading(true);
    setTimeout(() => {
      const url = process.env.REACT_APP_SERVER_URL;
      const endpoint = "/api/user/forgotpassword";
      const userData = {
        email: email,
      };
      post(url + endpoint, userData)
        .then(() => {
          toggleLoading(false);
          setRes("An email will be sent to finish resetting your password.");
        })
        .catch(() => {
          toggleLoading(false);
          setRes(
            "There was an issue while resetting your password. Please try again."
          );
        });
    }, 1000);
  };

  return (
    <input
      className="button primary-btn"
      value="Send Reset Link"
      type="submit"
      onClick={!loading ? onSubmit : undefined}
    />
  );
};

export default SendLogin;
