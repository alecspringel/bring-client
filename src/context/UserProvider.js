import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

/* USER CONTEXT
{
  id: "",
  first: "",
  last: "",
}
*/

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("bringToken");
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded.email) {
        setUserDetails(decoded);
        setAuthToken(token);
      } else {
        setUserDetails(false);
      }
    } else {
      setUserDetails(false);
    }
  }, []);

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
