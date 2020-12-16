import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
