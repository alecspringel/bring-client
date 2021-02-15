import React from "react";
import "./header.css";
import Nav from "./Nav";
import TopHead from "./TopHead";
import { useLocation } from "react-router-dom";
import AdminHeader from "./admin/AdminHeader";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/" || location.pathname.slice(0, 6) === "/login") {
    return (
      <>
        <TopHead />
        <Nav />
      </>
    );
  } else if (location.pathname === "/admin/signup") {
    return null;
  } else {
    return <AdminHeader />;
  }
};

export default Header;
