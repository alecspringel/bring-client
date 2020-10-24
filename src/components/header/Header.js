import React, { Component } from "react";
import styled from "styled-components";
import "./header.css";
import BringLogo from "../../assets/bring/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="bring-header">
        <HeaderContent className="container flex-row">
          <img
            className="bring-logo"
            src={BringLogo}
            alt="BRING Recycling logo"
          />
        </HeaderContent>
      </header>
    );
  }
}

export default Header;

const HeaderContent = styled.div`
  padding: 20px 0;
`;
