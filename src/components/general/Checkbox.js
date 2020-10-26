import React from "react";
import styled, { css } from "styled-components";

// Takes a prop ('isChecked': bool) to determine if the box is checked or not
const Checkbox = (props) => {
  return (
    <Box isChecked={props.isChecked} {...props}>
      <Icon viewBox="0 0 24 24" {...props}>
        <polyline points="20 6 9 17 4 12" {...props}/>
      </Icon>
    </Box>
  );
};

export default Checkbox;

const Icon = styled.svg`
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
  height: 17px;
`;

const Box = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #c1c1c1;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  transition: all 150ms;
  ${(props) =>
    props.isChecked &&
    css`
      background-color: #008eff;
      border: 1px solid #004e8c;
    `}
  ${Icon} {
    visibility: ${(props) => (props.isChecked ? "visible" : "hidden")};
  }
`;
