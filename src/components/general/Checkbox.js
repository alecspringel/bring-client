import React from "react";
import styled, { css } from "styled-components";

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually

const Checkbox = ({ className, isChecked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={isChecked} {...props} />
    <StyledCheckbox isChecked={isChecked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

// Takes a prop ('isChecked': bool) to determine if the box is checked or not
/*
const Checkbox = (props) => {
  return (
    <Box isChecked={props.isChecked} {...props}>
      <Icon viewBox="0 0 24 24" {...props}>
        <polyline points="20 6 9 17 4 12" {...props}/>
      </Icon>
    </Box>
  );
};
*/


export default Checkbox;

const Icon = styled.svg`
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
  height: 17px;
`;

  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  `;

const StyledCheckbox = styled.div`
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
      background-color: #F9AF42;
      border: 1px solid #ab6c0e;
    `}
  ${Icon} {
    visibility: ${(props) => (props.isChecked ? "visible" : "hidden")};
  }
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  `;

  const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`