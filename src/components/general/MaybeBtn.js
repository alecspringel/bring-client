import React from "react";
import styled from "styled-components";
import QuestionMarkImg from "../../assets/question-mark-white.svg";

const NoBtn = (props) => {
  return (
    <Container {...props}>
      <Checkmark src={QuestionMarkImg} />
    </Container>
  );
};

export default NoBtn;

const Container = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #F9AF42;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 3px 0px #F9AF4252;
`;

const Checkmark = styled.img`
  height: 30px;
`;
