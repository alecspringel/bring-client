import React from "react";
import Select from "react-select";

const Selector = (props) => (
  <div className="margin-t20" style={{width: '100%'}}>
    <Select options={props.options} {...props}/>
  </div>
);

export default Selector;
