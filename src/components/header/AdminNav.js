import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <Navigation>
        <div className="container">
          <ul className="flex-row justify">
            <NavItem>
              <Link to="/admin">Pending</Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/history">History</Link>
            </NavItem>
          </ul>
        </div>
      </Navigation>
    </div>
  );
};

export default Nav;

const Navigation = styled.nav`
  padding: 8px 16px;
  box-shadow: 2px 1px 3px #00000033;

  @media (max-width: 848px) {
    display: none;
  }
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
