import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <Navigation>
        <div className="container">
          <ul className="nav-list flex-row">
            <li>
              <a>shop</a>
            </li>
            <li>
              <a>business services</a>
            </li>
            <li>
              <a>learn</a>
            </li>
            <li>
              <a>news &amp; ideas</a>
            </li>
            <li>
              <a>product stewardship</a>
            </li>
            <li>
              <a>resources</a>
            </li>
            <li>
              <a>donate</a>
            </li>
            <li>
              <a>aboute BRING</a>
            </li>
            <li>
              <a>contact</a>
            </li>
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
  font-family: "Coolvetica";
  font-size: 18.88px;
  margin: 0 10px;
  text-align: center;

  &:first-child:last-child {
    margin: 0;
  }
`;
