import React from "react";
import styled from "styled-components";
import MobileNav from "./mobileNav/MobileNav";
import MobileOption from "./mobileNav/MobileOption";

const Nav = () => {
  return (
    <div>
      <Navigation>
        <Mobile>
          <MobileNav height="260px">
            <MobileOption>
              <a href="https://bringrecycling.org/">home</a>
            </MobileOption>
            <MobileOption>
              <a href="https://bringrecycling.org/learn/">learn</a>
            </MobileOption>
            <MobileOption>
              <a href="https://bringrecycling.org/resources/">resources</a>
            </MobileOption>
            <MobileOption>
              <a href="https://bringrecycling.org/about/">about BRING</a>
            </MobileOption>
            <MobileOption>
              <a href="https://bringrecycling.org/contact/">contact</a>
            </MobileOption>
          </MobileNav>
        </Mobile>
        <DesktopNav>
          <div className="container">
            <ul className="nav-list flex-row">
              <NavItem>
                <a href="https://bringrecycling.org/">home</a>
              </NavItem>
              <NavItem>
                <a href="https://bringrecycling.org/learn/">learn</a>
              </NavItem>
              <NavItem>
                <a href="https://bringrecycling.org/resources/">resources</a>
              </NavItem>
              <NavItem>
                <a href="https://bringrecycling.org/about/">about BRING</a>
              </NavItem>
              <NavItem>
                <a href="https://bringrecycling.org/contact/">contact</a>
              </NavItem>
            </ul>
          </div>
        </DesktopNav>
      </Navigation>
    </div>
  );
};

export default Nav;

const DesktopNav = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: 650px) {
    display: block;
  }
`;

const Navigation = styled.nav`
  padding: 8px 16px;
  box-shadow: 2px 1px 3px #00000033;
  position: relative;
`;

const NavItem = styled.li`
  padding: 8px;
  margin: 0 10px;
  text-align: center;

  &:first-child:last-child {
    margin: 0;
  }

  a {
    font-family: "Coolvetica";
    font-size: 18.88px;
  }
`;
