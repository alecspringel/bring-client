import React, { useContext } from "react";
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { UserDispatchContext } from "../../context/UserProvider";

const SendLogin = ({ username, password }) => {
  const setUser = useContext(UserDispatchContext);
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/login";
    const userData = {
      username: username,
      password: password,
    };
    post(url + endpoint, userData).then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;

      // Decode token to get user data
      const decoded = jwt_decode(token);
      if (decoded.auth) {
        localStorage.setItem("bringToken", token);
        // Set token to Auth header
        setAuthToken(token);
        setUser(decoded);
        history.push("/admin");
      }
    });
  };

  return (
    <input
      className="button primary-btn"
      label="Sign In"
      type="submit"
      onClick={onSubmit}
    />
  );
};

export default SendLogin;