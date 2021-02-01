import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const TextInput = ({ className, style, inputStyle, ...rest }) => {
  return (
    <div className={className} style={{ position: "relative", ...style }}>
      <Input
        {...rest}
        style={inputStyle}
        readOnly={rest.loading || rest.disabled}
      />
      {rest.loading && (
        <Overlay>
          <Loader type="ThreeDots" color="#00000060" height={30} width={30} />
        </Overlay>
      )}
    </div>
  );
};

export default TextInput;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 9px 7px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 0px #00000033;
  &:focus {
    outline-color: #2684ff;
  }
  border: ${(props) => props.error && "1px solid #DE472B"};
  background: ${(props) => props.disabled || (props.loading && "#f3f3f3")};
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 2px;
  right: 10px;
`;
