import React from "react";
import styled from "styled-components";

const Response = ({ res }) => {
  return (
    <Wrapper>
      <TitleBar>{res.title}</TitleBar>
      <MessageWrapper>{res.message}</MessageWrapper>
    </Wrapper>
  );
};

export default Response;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
  margin: 15px 0;
`;

const TitleBar = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 9px;
  border-radius: 3px 3px 0 0;
  background-color: #f1f1f1;
  min-height: 31px;
`;

const MessageWrapper = styled.div`
  padding: 9px;
`;
