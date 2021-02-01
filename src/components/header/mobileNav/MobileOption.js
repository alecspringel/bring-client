import React from "react";
import styled from "styled-components";

const MobileOption = ({ children }) => {
  return <Item>{children}</Item>;
};

export default MobileOption;

const Item = styled.div`
  width: 100%;
  padding: 15px;
  a {
    font-family: "Coolvetica";
    font-size: 18.88px;
  }
`;
