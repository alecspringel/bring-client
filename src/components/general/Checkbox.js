import React from "react";
import styled, { css } from "styled-components";

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually

// Takes a prop ('isChecked': bool) to determine if the box is checked or not
const Checkbox = (props) => {
  return (
    <Box ischecked={props.isChecked} {...props}>
      <HiddenCheckbox ischecked={props.isChecked} {...props} />
      <Icon
        tabindex={"0"}
        viewBox="0 0 24 24"
        onClick={props.onClick}
        name={props.name}
      >
        <polyline
          points="20 6 9 17 4 12"
          onClick={props.onClick}
          name={props.name}
        />
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
    props.ischecked &&
    css`
      background-color: #008eff;
      border: 1px solid #004e8c;
    `}
  ${Icon} {
    visibility: ${(props) => (props.ischecked ? "visible" : "hidden")};
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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
