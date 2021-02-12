import React, { useContext } from "react";
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { UserDispatchContext } from "../../context/UserProvider";
import { IsoRounded } from "@material-ui/icons";

const SendLogin = ({ email, password, handleData, loading }) => {
  const setUser = useContext(UserDispatchContext);
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    handleData("loading", true);
    setTimeout(() => {
      const url = process.env.REACT_APP_SERVER_URL;
      const endpoint = "/api/user/login";
      const userData = {
        email: email,
        password: password,
      };
      post(url + endpoint, userData)
        .then((res) => {
          handleData("loading", false);
          const { token } = res.data;
          const decoded = jwt_decode(token);
          if (decoded.email) {
            localStorage.setItem("bringToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Automatically redirects to feed
            setUser(decoded);
          }
        })
        .catch((err) => {
          handleData("loading", false);
          if (err.response) {
            console.log(err.response.data);
            handleData("errors", err.response.data);
          }
        });
    }, 1000);
  };

  return (
    <input
      className="button primary-btn"
      value="Sign In"
      type="submit"
      onClick={
        loading
          ? (e) => {
              e.preventDefault();
            }
          : onSubmit
      }
    />
  );
};

export default SendLogin;
