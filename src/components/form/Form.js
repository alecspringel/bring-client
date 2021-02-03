import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Inputs from "./Inputs";
import HeaderImg from "../../assets/donation-header.jpg";

const Form = () => (
  <ContentWrapper className="content container margin-t20">
    <Header
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      className="flex-row coolvetica align"
    >
      <Title>ready to donate?</Title>
    </Header>
    <div className="margin-t20">
      <Description />
      <Inputs />
    </div>
  </ContentWrapper>
);

export default Form;

const Title = styled.h1`
  color: #fff;
  font-size: 72px;
  font-weight: 400;
  margin-left: 20px;

  @media (max-width: 325px) {
    font-size: 50px;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 0;
`;

const Header = styled.div`
  width: 100%;
  height: 300px;
  background: url(${HeaderImg});
`;
