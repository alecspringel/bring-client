import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { UserDispatchContext } from "../../context/UserProvider";
import { UserContext } from "../../context/UserProvider";

const Footer = (props) => {
  const setUser = useContext(UserDispatchContext);
  const user = useContext(UserContext);
  const location = useLocation();
  // Dont render footer for signup page
  if (location.pathname === "/admin/signup") {
    return null;
  }

  const signOut = () => {
    localStorage.removeItem("bringToken");
    setUser(false);
  };

  return (
    <Foot>
      <div
        className="container flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <h3 className="coolvetica text-white">
          BRING
          <br />
          4446 franklin boulevard
          <br />
          eugene, or 97403
          <br />
          (541) 746-3023
          <br />
        </h3>
        <h3 className="coolvetica text-white">
          admin hours: monday-friday 9 a.m. – 5 p.m.
          <br />
          store hours: monday-saturday 9 a.m. – 5 p.m. and sunday 10 a.m. – 5
          p.m.
          <br />
          materials donations accepted until 4 p.m. every day
          <br />
          (closed on tuesdays)
          <br />
        </h3>
        <h3>
          <Link to="/" className="coolvetica text-white underline">
            donate
          </Link>
          <br />
          <Link to="/admin" className="coolvetica text-white underline">
            admin login
          </Link>
          <br />
          {user && (
            <span
              className="coolvetica text-white underline"
              onClick={signOut}
              style={{ cursor: "pointer" }}
            >
              sign out
            </span>
          )}
        </h3>
      </div>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  background-color: #de472b;
  width: 100%;
  padding: 40px 0;
  position: absolute;
  bottom: 0;
`;
