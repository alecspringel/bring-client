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
      const endpoint = "/api/user/resetpassword";
      const userData = {
        email: email,
      };
      post(url + endpoint, userData).then((res) => {
        toggleLoading(false);
        if (res.status === 200) {
          setRes("An email will be sent to finish resetting your password.");
        } else {
          setRes(
            "There was an issue while resetting your password. Please try again."
          );
        }
      });
    }, 1000);
  };

  return (
    <input
      className="button primary-btn"
      value="Send Reset Link"
      type="submit"
      onClick={!loading && onSubmit}
    />
  );
};

export default SendLogin;
