import React from "react";
import styled from "styled-components";
import BringLogo from "../../assets/bring/logo.svg";

const TopHead = () => {
  return (
    <header className="primary-bg">
      <HeaderContent className="container flex-row">
        <a href="https://bringrecycling.org">
          <img
            className="bring-logo"
            src={BringLogo}
            alt="BRING Recycling logo"
          />
        </a>
      </HeaderContent>
    </header>
  );
};

export default TopHead;

const HeaderContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
