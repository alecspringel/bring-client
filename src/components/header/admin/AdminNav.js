import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileNav from "../mobileNav/MobileNav";
import MobileOption from "../mobileNav/MobileOption";
import ProfileDropdown from "./ProfileDropdown";

const Nav = () => {
  return (
    <div>
      <Navigation>
        <div className="container">
          <Mobile>
            <MobileNav height="104px">
              <MobileOption>
                <Link to="/admin">Pending</Link>
              </MobileOption>
              <MobileOption>
                <Link to="/admin/history">History</Link>
              </MobileOption>
            </MobileNav>
          </Mobile>
          <DesktopNav>
            <ul className="flex-row justify">
              <NavItem>
                <Link to="/admin">Pending</Link>
              </NavItem>
              <NavItem>
                <Link to="/admin/history">History</Link>
              </NavItem>
            </ul>
          </DesktopNav>
          <RightControls>
            <ProfileDropdown />
          </RightControls>
        </div>
      </Navigation>
    </div>
  );
};

export default Nav;

const DesktopNav = styled.div`
  @media (max-width: 550px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: 550px) {
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

const RightControls = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 15px;
`;
