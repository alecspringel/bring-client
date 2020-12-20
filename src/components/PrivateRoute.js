import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import AdminSignUp from "./finishSignUp/AdminSignUp";

// We check if the user has a first name to determine if they
// have completed signing up. If not, render the sign up component

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.first ? (
          <Component {...props} />
        ) : user ? (
          <Redirect to="/admin/signup" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
