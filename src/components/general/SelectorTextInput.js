import React from "react";
import styled from "styled-components";
import Selector from "./Selector";
import TextInput from "./TextInput";

const SelectorTextInput = ({
  options,
  selectorWidth,
  placeholder,
  onSelectorChange,
  onTextChange,
}) => {
  return (
    <div className="flex-row">
      <div style={{ width: selectorWidth }}>
        <Selector
          options={options}
          style={{
            height: "100%",
            borderRadius: 0,
            borderRight: "1px solid black",
          }}
          onChange={onSelectorChange}
          defaultValue={options[0]}
        />
      </div>
      <CustomInput placeholder={placeholder} onChange={onTextChange} />
    </div>
  );
};

export default SelectorTextInput;

const CustomInput = styled(TextInput)`
  height: 38px;
  border-radius: 4px;
  margin-left: 5px;
  box-shadow: none;
`;
