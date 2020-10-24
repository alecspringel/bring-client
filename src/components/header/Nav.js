import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <Navigation>
        <div className="container">
          <ul className="nav-list flex-row">
            <NavItem>
              <a href="https://bringrecycling.org/shop/">shop</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/services/">business services</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/learn/">learn</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/news-and-ideas/">news &amp; ideas</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/product-stewardship/">product stewardship</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/resources/">resources</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/donate/">donate</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/about/">aboute BRING</a>
            </NavItem>
            <NavItem>
              <a href="https://bringrecycling.org/contact/">contact</a>
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
