import React, { useContext } from "react";
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const SendNewPassword = ({ form, tokenId, hashedId }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      return "HANDLE ERROR";
    }
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/resetpassword";
    const body = {
      password: form.password,
      tokenid: tokenId,
      hashedid: hashedId,
    };
    post(url + endpoint, body).then((res) => {});
  };

  return (
    <input
      className="button primary-btn"
      value="Update Password"
      type="submit"
      onClick={onSubmit}
    />
  );
};

export default SendNewPassword;
