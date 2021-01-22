import React, { Component } from "react";
import "./header.css";
import Nav from "./Nav";
import TopHead from "./TopHead";
import { useLocation } from "react-router-dom";
import AdminHeader from "./admin/AdminHeader";

const Header = () => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/login/reset"
  ) {
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
