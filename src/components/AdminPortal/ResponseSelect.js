import React, { Component } from "react";
import TextArea from "../general/TextArea";

class ResponseSelect extends Component {
  render() {
    return (
      <section className="response-select">
      <p>[Title], from [Name]</p>
      <button class="dropbtn">Suggestion for disposal</button>
      <div id="disposalDropdown" class="dropdown-content">
        <p>(dropdown options)  (selecting one would fill text box with the corresponsing response from BRING's response resource)</p>
        <p>Dispose in garbage</p>
        <p>Dispose at Lane County transfer station</p>
        <p>Recycle at Lane County transfer station (no fee)</p>
        <p>Recycle at Lane County transfer station (fee)</p>
      </div>
      <TextArea
          placeholder="Select a suggestion for disposal or customize a response"
          type="text"
          rows="3"
          style={{ marginBottom: 15 }}
        />
    </section>
    );
  }
}

export default ResponseSelect;