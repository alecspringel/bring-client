import React, { useContext } from "react";
import { post } from "axios";
import setAuthToken from "../../functions/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const SendNewPassword = ({ form, tokenId, hashedId, setForm }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, loading: true });
    setTimeout(() => {
      if (form.password !== form.confirm) {
        setForm({ ...form, msg: " Passwords do not match" });
        return;
      }
      const url = process.env.REACT_APP_SERVER_URL;
      const endpoint = "/api/user/resetpassword";
      const body = {
        password: form.password,
        tokenid: tokenId,
        hashedid: hashedId,
      };
      post(url + endpoint, body)
        .then((res) => {
          setForm({ ...form, loading: false });
          if (res.status === 200) {
            setForm({
              ...form,
              msg: "Password reset successfully",
              password: "",
              confirm: "",
            });
          }
        })
        .catch((err) => {
          setForm({ ...form, loading: false });
          setForm({
            ...form,
            msg:
              err.response.data.error ||
              "There was an issue while resetting your password. Please try again.",
          });
        });
    }, 1000);
  };

  return (
    <input
      className="button primary-btn"
      value="Update Password"
      type="submit"
      onClick={
        !form.loading
          ? onSubmit
          : (e) => {
              e.preventDefault();
            }
      }
    />
  );
};

export default SendNewPassword;
