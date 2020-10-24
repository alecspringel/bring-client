import React, { Component } from "react";
import styled from "styled-components";
import "./header.css";
import BringLogo from "../../assets/bring/logo.svg";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <>
        <header className="primary-bg">
          <HeaderContent className="container flex-row">
            <img
              className="bring-logo"
              src={BringLogo}
              alt="BRING Recycling logo"
            />
          </HeaderContent>
        </header>
        <Nav />
      </>
    );
  }
}

export default Header;

const HeaderContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
