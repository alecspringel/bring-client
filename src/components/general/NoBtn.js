import React from "react";
import styled from "styled-components";
import XImg from "../../assets/x-white.svg";

const NoBtn = (props) => {
  return (
    <Container {...props}>
      <Checkmark src={XImg} />
    </Container>
  );
};

export default NoBtn;

const Container = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #DE472B;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 3px 0px #DE472B52;
  transition: all 150ms;
  &:hover {
    background-color: #ce391e;
  }
`;

const Checkmark = styled.img`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
