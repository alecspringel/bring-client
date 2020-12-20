import React from "react";
import styled from "styled-components";

const TextInput = (props) => {
  return <Input {...props} />;
};

export default TextInput;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 9px 7px;
  border: 1px solid #c1c1c1;
  border-radius: 2px;
  box-shadow: 0px 0px 2px 0px #00000033;
  &:focus {
    outline-color: #2684ff;
  }
  border: ${(props) => props.error && "1px solid #DE472B"};
  background: ${(props) => props.disabled && "#f3f3f3"};
`;
