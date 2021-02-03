import React from "react";
import styled from "styled-components";
import CheckmarkImg from "../../assets/checkmark-white.svg";

const YesBtn = (props) => {
  return (
    <Container {...props}>
      <Checkmark src={CheckmarkImg} />
    </Container>
  );
};

export default YesBtn;

const Container = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #00a69c;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 3px 0px #00a69c52;
  transition: all 150ms;
  &:hover {
    background-color: #009e95;
  }
`;

const Checkmark = styled.img`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
