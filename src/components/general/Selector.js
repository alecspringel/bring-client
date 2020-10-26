import React from "react";
import Select from "react-select";

const Selector = (props) => (
  <div style={{width: '100%'}}>
    <Select options={props.options} {...props}/>
  </div>
);

export default Selector;
