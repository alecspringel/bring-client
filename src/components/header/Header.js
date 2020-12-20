import React, { Component } from "react";
import "./header.css";
import Nav from "./Nav";
import TopHead from "./TopHead";
import { useLocation } from "react-router-dom";
import AdminHeader from "./admin/AdminHeader";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  switch (location.pathname) {
    case "/" || "/login":
      return (
        <>
          <TopHead />
          <Nav />
        </>
      );
    case "/admin/signup":
      return null;
    default:
      return <AdminHeader />;
  }
};

export default Header;
