import React from "react";
import styled from "styled-components";

// Apply label with props.label
const Button = (props) => {
  return <Btn {...props}>{props.label || props.children}</Btn>;
};

export default Button;

const Btn = styled.button`
  position: relative;
  width: ${(props) => props.width};
`;
