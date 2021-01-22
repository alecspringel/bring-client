import React, { useContext } from "react";
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { UserDispatchContext } from "../../context/UserProvider";

const SendLogin = ({ email, password }) => {
  const setUser = useContext(UserDispatchContext);
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/login";
    const userData = {
      email: email,
      password: password,
    };
    post(url + endpoint, userData).then((res) => {
      const { token } = res.data;
      const decoded = jwt_decode(token);
      if (decoded.email) {
        localStorage.setItem("bringToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Automatically redirects to feed
        setUser(decoded);
      }
    });
  };

  return (
    <input
      className="button primary-btn"
      value="Sign In"
      type="submit"
      onClick={onSubmit}
    />
  );
};

export default SendLogin;
