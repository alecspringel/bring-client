import React from 'react';
import styled from 'styled-components';

const TextInput = (props) => {
  return (
    <Input {...props} />
  );
};

export default TextInput;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 9px 7px;
  border: 1px solid #c1c1c1;
  border-radius: 2px;
  box-shadow: 0px 0px 2px 0px #00000033;
`