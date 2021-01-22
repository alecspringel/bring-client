import React from "react";
import Select from "react-select";

const Selector = (props) => (
  <div style={{ width: "100%" }}>
    <Select
      options={props.options}
      {...props}
      onChange={(value) => {
        if (value && props.onChange) {
          props.onChange(value);
        }
      }}
    />
  </div>
);

export default Selector;
